import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes
} from "@nestjs/common";

import {
  applyRolloutChangeRequestSchema,
  applyRolloutChangeResponseSchema,
  evaluateFlagRequestSchema,
  evaluateFlagResponseSchema,
  featureFlagSchema,
  featureFlagListResponseSchema,
  proposeRolloutChangeRequestSchema,
  proposeRolloutChangeResponseSchema
} from "../../../application/dto/feature-flags.dto";
import { EvaluateFlagForRequest } from "../../../application/usecases/evaluate-flag-for-request";
import { ProposeRolloutChange } from "../../../application/usecases/propose-rollout-change";
import { ApplyRolloutChange } from "../../../application/usecases/apply-rollout-change";
import { ZodValidationPipe } from "../presenters/zod-validation.pipe";
import { presentWithSchema } from "../presenters/zod-presenter";
import { mapFeatureFlagToDto } from "../../../application/mappers/feature-flag.mapper";
import { InMemoryFeatureFlagRepository } from "../../../infrastructure/repositories/in-memory-feature-flag.repository";

@Controller("feature-flags")
export class FeatureFlagsController {
  constructor(
    private readonly repository: InMemoryFeatureFlagRepository,
    private readonly evaluateFlagForRequest: EvaluateFlagForRequest,
    private readonly proposeRolloutChange: ProposeRolloutChange,
    private readonly applyRolloutChange: ApplyRolloutChange
  ) {}

  @Get()
  async list() {
    const flags = await this.repository.getAll();
    return presentWithSchema(featureFlagListResponseSchema, {
      items: flags.map(mapFeatureFlagToDto)
    });
  }

  @Get(":id")
  async detail(@Param("id") id: string) {
    const flag = await this.repository.getById(id);
    if (!flag) {
      throw new Error("Feature flag not found");
    }
    return presentWithSchema(featureFlagSchema, mapFeatureFlagToDto(flag));
  }

  @Post("evaluate")
  @UsePipes(new ZodValidationPipe(evaluateFlagRequestSchema))
  async evaluate(@Body() body: any) {
    const response = await this.evaluateFlagForRequest.execute(
      body.flagId,
      body.context
    );
    return presentWithSchema(evaluateFlagResponseSchema, response);
  }

  @Post("propose")
  @UsePipes(new ZodValidationPipe(proposeRolloutChangeRequestSchema))
  async propose(@Body() body: any) {
    const response = await this.proposeRolloutChange.execute(
      body.flagId,
      body.requestedPercentage
    );
    return presentWithSchema(proposeRolloutChangeResponseSchema, response);
  }

  @Post("apply")
  @UsePipes(new ZodValidationPipe(applyRolloutChangeRequestSchema))
  async apply(@Body() body: any) {
    const response = await this.applyRolloutChange.execute(
      body.flagId,
      body.approved
    );
    return presentWithSchema(applyRolloutChangeResponseSchema, response);
  }
}
