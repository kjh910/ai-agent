import { Module } from "@nestjs/common";

import { IncidentsModule } from "./interfaces/http/controllers/incidents.module";
import { FeatureFlagsModule } from "./interfaces/http/controllers/feature-flags.module";
import { PoliciesModule } from "./interfaces/http/controllers/policies.module";
import { SearchModule } from "./interfaces/http/controllers/search.module";
import { IntegrationsModule } from "./interfaces/http/controllers/integrations.module";

@Module({
  imports: [
    IncidentsModule,
    FeatureFlagsModule,
    PoliciesModule,
    SearchModule,
    IntegrationsModule
  ]
})
export class AppModule {}
