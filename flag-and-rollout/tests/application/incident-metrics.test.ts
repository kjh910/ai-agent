import { describe, expect, it } from "vitest";

import { computeIncidentMetrics } from "@/application/incident-metrics";
import { incidents } from "@/lib/mock-data";

describe("incident metrics", () => {
  it("computes open and sev1 counts", () => {
    const metrics = computeIncidentMetrics(incidents);
    expect(metrics.openIncidents).toBe(3);
    expect(metrics.sev1Count).toBe(1);
  });
});
