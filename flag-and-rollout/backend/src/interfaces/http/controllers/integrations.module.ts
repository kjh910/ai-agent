import { Module } from "@nestjs/common";

import { GetIntegrations } from "../../../application/usecases/get-integrations";
import { InMemoryIntegrationRepository } from "../../../infrastructure/repositories/in-memory-integration.repository";
import { IntegrationsController } from "./integrations.controller";

@Module({
  controllers: [IntegrationsController],
  providers: [
    InMemoryIntegrationRepository,
    {
      provide: GetIntegrations,
      useFactory: (repo: InMemoryIntegrationRepository) =>
        new GetIntegrations(repo),
      inject: [InMemoryIntegrationRepository]
    }
  ]
})
export class IntegrationsModule {}
