import { Module } from "@nestjs/common";

import { GetPolicies } from "../../../application/usecases/get-policies";
import { InMemoryPolicyRepository } from "../../../infrastructure/repositories/in-memory-policy.repository";
import { PoliciesController } from "./policies.controller";

@Module({
  controllers: [PoliciesController],
  providers: [
    InMemoryPolicyRepository,
    {
      provide: GetPolicies,
      useFactory: (repo: InMemoryPolicyRepository) => new GetPolicies(repo),
      inject: [InMemoryPolicyRepository]
    }
  ]
})
export class PoliciesModule {}
