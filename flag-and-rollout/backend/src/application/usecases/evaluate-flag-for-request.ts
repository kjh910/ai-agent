import { FeatureFlagRepository } from "../ports/feature-flag.repository";

export class EvaluateFlagForRequest {
  constructor(private readonly repository: FeatureFlagRepository) {}

  async execute(flagId: string, context?: Record<string, string>) {
    const flag = await this.repository.getById(flagId);
    if (!flag) {
      throw new Error("Feature flag not found");
    }

    const baseEnabled = flag.status === "On" || flag.status === "Limited";
    const percentageEnabled = flag.rolloutPercentage >= 50;

    return {
      flagId,
      enabled: baseEnabled && percentageEnabled,
      reason: baseEnabled
        ? context?.segment
          ? `Segment ${context.segment} evaluated at ${flag.rolloutPercentage}% rollout.`
          : `Rollout at ${flag.rolloutPercentage}%.`
        : "Flag is disabled."
    };
  }
}
