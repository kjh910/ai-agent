import { FeatureFlagRepository } from "../ports/feature-flag.repository";
import { ApprovalRequiredError } from "../../domain/errors/approval-required.error";

export class ApplyRolloutChange {
  constructor(private readonly repository: FeatureFlagRepository) {}

  async execute(flagId: string, approved: boolean) {
    const flag = await this.repository.getById(flagId);
    if (!flag) {
      throw new Error("Feature flag not found");
    }

    if (flag.approvalRequired && !approved) {
      throw new ApprovalRequiredError();
    }

    const updated = {
      ...flag,
      rolloutPercentage: approved ? 100 : flag.rolloutPercentage,
      status: approved ? "On" : flag.status,
      lastUpdated: new Date().toISOString()
    };

    await this.repository.update(updated);

    return {
      flagId,
      rolloutPercentage: updated.rolloutPercentage,
      status: updated.status
    };
  }
}
