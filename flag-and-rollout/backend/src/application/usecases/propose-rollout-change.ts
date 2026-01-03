import { FeatureFlagRepository } from "../ports/feature-flag.repository";
import { InvalidRolloutChangeError } from "../../domain/errors/invalid-rollout-change.error";

export class ProposeRolloutChange {
  constructor(private readonly repository: FeatureFlagRepository) {}

  async execute(flagId: string, requestedPercentage: number) {
    const flag = await this.repository.getById(flagId);
    if (!flag) {
      throw new Error("Feature flag not found");
    }

    const delta = Math.abs(requestedPercentage - flag.rolloutPercentage);
    if (delta > 25) {
      throw new InvalidRolloutChangeError(
        "Rollout changes over 25% require staged approval."
      );
    }

    return {
      flagId,
      approved: !flag.approvalRequired,
      reason: flag.approvalRequired
        ? "Approval required before applying rollout change."
        : "Rollout change approved by policy.",
      proposedPercentage: requestedPercentage
    };
  }
}
