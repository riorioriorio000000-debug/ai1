import type { Express, Request, Response } from "express";
import { generateImage, listImageModels } from "./_core/imageGeneration";

export const MGEBS_SKILLS = [
  { id: "image", purpose: "Create or edit website images and visual assets", endpoint: "/api/mgebs/image" },
  { id: "remove-background", purpose: "Remove an image background and request transparent PNG output", endpoint: "/api/mgebs/remove-background" },
  { id: "coding", purpose: "Build and modify code and website features", endpoint: "/api/nvidia/chat" },
  { id: "research", purpose: "Analyze information and organize source-based answers", endpoint: "/api/nvidia/chat" },
  { id: "planning", purpose: "Turn outcomes into clear executable steps", endpoint: "/api/nvidia/chat" },
] as const;

function requirePrompt(value: unknown): string {
  if (typeof value !== "string" || value.trim().length < 3) throw new Error("prompt must be a non-empty string");
  return value.trim();
}

async function imageResponse(req: Request, res: Response, mode: "create" | "remove-background") {
  try {
    const prompt = requirePrompt(req.body?.prompt);
    const originalImages = Array.isArray(req.body?.originalImages) ? req.body.originalImages : [];
    const finalPrompt = mode === "remove-background"
      ? `${prompt}. Remove the entire background cleanly, keep the subject unchanged, preserve edges and fine details, and return a transparent PNG with no halo, shadow, or replacement background.`
      : prompt;
    const result = await generateImage({
      prompt: finalPrompt,
      originalImages,
      model: req.body?.model,
      quality: "medium",
    });
    res.json({ success: true, skill: mode === "remove-background" ? "remove-background" : "image", ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Image skill failed";
    res.status(400).json({ success: false, error: { message } });
  }
}

export function registerMgebsSkillRoutes(app: Express) {
  app.get("/api/mgebs/skills", (_req, res) => res.json({ skills: MGEBS_SKILLS }));
  app.get("/api/mgebs/image-models", async (_req, res) => {
    try {
      res.json(await listImageModels());
    } catch (error) {
      res.status(503).json({ error: { message: error instanceof Error ? error.message : "Image model list unavailable" } });
    }
  });
  app.post("/api/mgebs/image", (req, res) => imageResponse(req, res, "create"));
  app.post("/api/mgebs/remove-background", (req, res) => imageResponse(req, res, "remove-background"));
}
