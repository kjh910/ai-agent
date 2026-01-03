import { describe, expect, it } from "vitest";

import { compareSeverity, isActiveIncident } from "@/domain/incident";
import { incidents } from "@/lib/mock-data";

describe("domain incident helpers", () => {
  it("flags active incidents", () => {
    const active = incidents.filter(isActiveIncident);
    expect(active).toHaveLength(3);
  });

  it("compares severity by rank", () => {
    const sorted = [...incidents].sort(compareSeverity);
    expect(sorted[0]?.severity).toBe("Sev1");
    expect(sorted[sorted.length - 1]?.severity).toBe("Sev4");
  });
});
