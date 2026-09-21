import { describe, expect, it } from "vitest";

describe("NVIDIA credentials", () => {
  it("can authenticate against the NVIDIA model catalog", async () => {
    const apiKey = process.env.NVIDIA_API_KEY_MISTRAL_NEMOTRON;
    expect(apiKey, "NVIDIA_API_KEY_MISTRAL_NEMOTRON must be configured").toBeTruthy();

    const response = await fetch("https://integrate.api.nvidia.com/v1/models", {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    expect(response.ok).toBe(true);
    const body = (await response.json()) as { data?: unknown[] };
    expect(Array.isArray(body.data)).toBe(true);
  }, 30_000);
});
