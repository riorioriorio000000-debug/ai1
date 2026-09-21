import type { Express, Request, Response as ExpressResponse } from "express";

const NVIDIA_BASE_URL = "https://integrate.api.nvidia.com/v1";

type Role = "system" | "user" | "assistant" | "tool";
type MessageContent = string | Array<Record<string, unknown>>;

export type NvidiaMessage = {
  role: Role;
  content: MessageContent;
  name?: string;
  tool_call_id?: string;
};

export type NvidiaModelInfo = {
  id: string;
  label: string;
  purpose: string;
  capabilities: string[];
};

const MODEL_CATALOG: NvidiaModelInfo[] = [
  {
    id: "mistralai/mistral-nemotron",
    label: "Mistral Nemotron",
    purpose: "general chat and fast answers",
    capabilities: ["chat", "summarization", "writing"],
  },
  {
    id: "openai/gpt-oss-20b",
    label: "GPT OSS 20B",
    purpose: "reasoning and analysis",
    capabilities: ["chat", "reasoning", "analysis"],
  },
  {
    id: "google/gemma-4-31b-it",
    label: "Gemma 4 31B",
    purpose: "general assistant and instruction following",
    capabilities: ["chat", "instructions", "coding"],
  },
  {
    id: "google/diffusiongemma-26b-a4b-it",
    label: "DiffusionGemma",
    purpose: "multimodal image understanding",
    capabilities: ["vision", "image-analysis"],
  },
  {
    id: "poolside/laguna-xs-2.1",
    label: "Laguna XS",
    purpose: "coding and technical reasoning",
    capabilities: ["coding", "reasoning"],
  },
  {
    id: "meta/muse-glimmer-30b",
    label: "Muse Glimmer",
    purpose: "creative writing and ideation",
    capabilities: ["creative-writing", "brainstorming"],
  },
  {
    id: "nvidia/nemotron-3.5-lightning-30b-a3b",
    label: "Nemotron Lightning",
    purpose: "fast streamed reasoning",
    capabilities: ["streaming", "reasoning", "chat"],
  },
  {
    id: "deepseek-ai/deepseek-v4-flash-0731",
    label: "DeepSeek V4 Flash",
    purpose: "deep reasoning and long-form problem solving",
    capabilities: ["reasoning", "analysis", "coding"],
  },
];

const keyForModel: Record<string, string | undefined> = {
  "mistralai/mistral-nemotron": process.env.NVIDIA_API_KEY_MISTRAL_NEMOTRON,
  "openai/gpt-oss-20b": process.env.NVIDIA_API_KEY_GPT_OSS,
  "google/gemma-4-31b-it": process.env.NVIDIA_API_KEY_GEMMA,
  "google/diffusiongemma-26b-a4b-it": process.env.NVIDIA_API_KEY_DIFFUSION_GEMMA,
  "poolside/laguna-xs-2.1": process.env.NVIDIA_API_KEY_LAGUNA,
  "meta/muse-glimmer-30b": process.env.NVIDIA_API_KEY_MUSE_GLIMMER,
  "nvidia/nemotron-3.5-lightning-30b-a3b": process.env.NVIDIA_API_KEY_NEMOTRON_LIGHTNING,
  "deepseek-ai/deepseek-v4-flash-0731": process.env.NVIDIA_API_KEY_DEEPSEEK,
};

const fallbackKeys = [
  process.env.NVIDIA_API_KEY_POOL_1,
  process.env.NVIDIA_API_KEY_POOL_2,
  process.env.NVIDIA_API_KEY_POOL_3,
  process.env.NVIDIA_API_KEY_POOL_4,
  process.env.NVIDIA_API_KEY_POOL_5,
].filter((value): value is string => Boolean(value));

export function listNvidiaModels(): NvidiaModelInfo[] {
  return MODEL_CATALOG;
}

export function getNvidiaApiKey(model: string): string {
  const modelKey = keyForModel[model];
  const key = modelKey || fallbackKeys[0];
  if (!key) throw new Error("No NVIDIA API key is configured");
  return key;
}

function normalizeModel(model?: string): string {
  if (model && MODEL_CATALOG.some((item) => item.id === model)) return model;
  return "mistralai/mistral-nemotron";
}

function writeError(res: ExpressResponse, status: number, message: string) {
  res.status(status).json({ error: { message, type: "nvidia_gateway_error" } });
}

export function registerNvidiaRoutes(app: Express) {
  app.get("/api/nvidia/models", (_req, res) => {
    res.json({ data: listNvidiaModels(), provider: "NVIDIA NIM" });
  });

  app.post("/api/nvidia/chat", async (req: Request, res: ExpressResponse) => {
    const body = req.body as {
      model?: string;
      messages?: NvidiaMessage[];
      temperature?: number;
      top_p?: number;
      max_tokens?: number;
      stream?: boolean;
      chat_template_kwargs?: Record<string, unknown>;
      extra_body?: Record<string, unknown>;
    };

    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      writeError(res, 400, "messages must be a non-empty array");
      return;
    }

    const model = normalizeModel(body.model);
    let apiKey: string;
    try {
      apiKey = getNvidiaApiKey(model);
    } catch (error) {
      writeError(res, 503, error instanceof Error ? error.message : "NVIDIA is not configured");
      return;
    }

    let upstream: globalThis.Response;
    try {
      upstream = await fetch(`${NVIDIA_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          Accept: body.stream ? "text/event-stream" : "application/json",
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: body.messages,
          temperature: body.temperature ?? 0.7,
          top_p: body.top_p ?? 0.95,
          max_tokens: body.max_tokens ?? 4096,
          stream: Boolean(body.stream),
          ...(body.chat_template_kwargs ? { chat_template_kwargs: body.chat_template_kwargs } : {}),
          ...(body.extra_body ?? {}),
        }),
        signal: AbortSignal.timeout(45_000),
      });
    } catch (error) {
      const message = error instanceof Error && error.name === "TimeoutError"
        ? "NVIDIA request timed out after 45 seconds"
        : error instanceof Error
          ? error.message
          : "NVIDIA request failed";
      writeError(res, 504, message);
      return;
    }

    if (!upstream.ok) {
      const detail = await upstream.text();
      writeError(res, upstream.status, detail || "NVIDIA request failed");
      return;
    }

    if (!body.stream || !upstream.body) {
      res.status(upstream.status);
      res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
      res.send(await upstream.text());
      return;
    }

    res.status(200);
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(decoder.decode(value, { stream: true }));
      }
    } finally {
      reader.releaseLock();
      res.end();
    }
  });
}
