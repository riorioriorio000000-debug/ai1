import { describe, expect, it } from "vitest";
import { getNvidiaApiKey, listNvidiaModels } from "./nvidia";

describe("NVIDIA model gateway", () => {
  it("exposes the requested model roles without exposing credentials", () => {
    const models = listNvidiaModels();
    expect(models.map((model) => model.id)).toEqual([
      "mistralai/mistral-nemotron",
      "openai/gpt-oss-20b",
      "google/gemma-4-31b-it",
      "google/diffusiongemma-26b-a4b-it",
      "poolside/laguna-xs-2.1",
      "meta/muse-glimmer-30b",
      "nvidia/nemotron-3.5-lightning-30b-a3b",
      "deepseek-ai/deepseek-v4-flash-0731",
    ]);
    expect(models.every((model) => model.purpose && model.capabilities.length > 0)).toBe(true);
    expect(models.some((model) => model.label.includes("Mistral"))).toBe(true);
  });

  it("resolves a server-side key for a configured model", () => {
    expect(getNvidiaApiKey("mistralai/mistral-nemotron")).toMatch(/^nvapi-/);
  });
});
