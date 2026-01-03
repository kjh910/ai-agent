import { Controller, Get } from "@nestjs/common";

import { policyListResponseSchema } from "../../../application/dto/policies.dto";
import { GetPolicies } from "../../../application/usecases/get-policies";
import { presentWithSchema } from "../presenters/zod-presenter";

@Controller("policies")
export class PoliciesController {
  constructor(private readonly getPolicies: GetPolicies) {}

  @Get()
  async list() {
    const items = await this.getPolicies.execute();
    return presentWithSchema(policyListResponseSchema, { items });
  }
}
