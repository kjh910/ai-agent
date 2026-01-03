import { Module } from "@nestjs/common";

import { ApplyRolloutChange } from "../../../application/usecases/apply-rollout-change";
import { EvaluateFlagForRequest } from "../../../application/usecases/evaluate-flag-for-request";
import { ProposeRolloutChange } from "../../../application/usecases/propose-rollout-change";
import { InMemoryFeatureFlagRepository } from "../../../infrastructure/repositories/in-memory-feature-flag.repository";
import { FeatureFlagsController } from "./feature-flags.controller";

@Module({
  controllers: [FeatureFlagsController],
  providers: [
    InMemoryFeatureFlagRepository,
    {
      provide: EvaluateFlagForRequest,
      useFactory: (repo: InMemoryFeatureFlagRepository) =>
        new EvaluateFlagForRequest(repo),
      inject: [InMemoryFeatureFlagRepository]
    },
    {
      provide: ProposeRolloutChange,
      useFactory: (repo: InMemoryFeatureFlagRepository) =>
        new ProposeRolloutChange(repo),
      inject: [InMemoryFeatureFlagRepository]
    },
    {
      provide: ApplyRolloutChange,
      useFactory: (repo: InMemoryFeatureFlagRepository) =>
        new ApplyRolloutChange(repo),
      inject: [InMemoryFeatureFlagRepository]
    }
  ]
})
export class FeatureFlagsModule {}
