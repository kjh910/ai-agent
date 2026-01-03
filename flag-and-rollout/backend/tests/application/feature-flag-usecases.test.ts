import { describe, expect, it } from "vitest";

import { ApplyRolloutChange } from "../../src/application/usecases/apply-rollout-change";
import { ProposeRolloutChange } from "../../src/application/usecases/propose-rollout-change";
import { InMemoryFeatureFlagRepository } from "../../src/infrastructure/repositories/in-memory-feature-flag.repository";
import { ApprovalRequiredError } from "../../src/domain/errors/approval-required.error";

const createRepository = () => new InMemoryFeatureFlagRepository();

describe("feature flag usecases", () => {
  it("rejects large rollout changes", async () => {
    const repository = createRepository();
    const usecase = new ProposeRolloutChange(repository);

    await expect(usecase.execute("flag-1", 90)).rejects.toThrowError();
  });

  it("requires approval before applying rollout", async () => {
    const repository = createRepository();
    const usecase = new ApplyRolloutChange(repository);

    await expect(usecase.execute("flag-1", false)).rejects.toBeInstanceOf(
      ApprovalRequiredError
    );
  });

  it("applies rollout change when approved", async () => {
    const repository = createRepository();
    const usecase = new ApplyRolloutChange(repository);

    const result = await usecase.execute("flag-2", true);
    expect(result.rolloutPercentage).toBe(100);
    expect(result.status).toBe("On");
  });
});
