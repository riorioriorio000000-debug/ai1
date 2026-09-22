import { describe, expect, it } from "vitest";
import { MGEBS_SYSTEM_PROMPT } from "./nvidia";
import { MGEBS_SKILLS } from "./mgebs-skills";

describe("Mgebs AI skills", () => {
  it("exposes the core on-demand skills", () => {
    expect(MGEBS_SKILLS.map((skill) => skill.id)).toEqual([
      "image",
      "remove-background",
      "coding",
      "research",
      "planning",
    ]);
    expect(MGEBS_SKILLS.find((skill) => skill.id === "image")?.endpoint).toBe("/api/mgebs/image");
    expect(MGEBS_SKILLS.find((skill) => skill.id === "remove-background")?.endpoint).toBe("/api/mgebs/remove-background");
  });

  it("keeps the assistant instructions scoped to Mgebs and its skills", () => {
    expect(MGEBS_SYSTEM_PROMPT).toContain("Mgebs AI");
    expect(MGEBS_SYSTEM_PROMPT).toContain("/api/mgebs/image");
    expect(MGEBS_SYSTEM_PROMPT).toContain("/api/mgebs/remove-background");
    expect(MGEBS_SYSTEM_PROMPT).toContain("never reveal API keys");
  });
});
