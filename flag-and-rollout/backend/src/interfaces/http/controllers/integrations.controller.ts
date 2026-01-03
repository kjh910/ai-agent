import { Controller, Get } from "@nestjs/common";

import { integrationListResponseSchema } from "../../../application/dto/integrations.dto";
import { GetIntegrations } from "../../../application/usecases/get-integrations";
import { presentWithSchema } from "../presenters/zod-presenter";

@Controller("integrations")
export class IntegrationsController {
  constructor(private readonly getIntegrations: GetIntegrations) {}

  @Get()
  async list() {
    const items = await this.getIntegrations.execute();
    return presentWithSchema(integrationListResponseSchema, { items });
  }
}
