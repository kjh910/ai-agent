import { describe, expect, it } from "vitest";

import { ApprovalRequiredError } from "../../src/domain/errors/approval-required.error";
import { InvalidRolloutChangeError } from "../../src/domain/errors/invalid-rollout-change.error";

describe("rollout policy errors", () => {
  it("defines approval required error", () => {
    const error = new ApprovalRequiredError();
    expect(error.message).toContain("Approval required");
  });

  it("defines invalid rollout change error", () => {
    const error = new InvalidRolloutChangeError();
    expect(error.message).toContain("Proposed rollout change");
  });
});
