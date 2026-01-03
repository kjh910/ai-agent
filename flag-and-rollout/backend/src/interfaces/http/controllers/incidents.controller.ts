import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes
} from "@nestjs/common";

import {
  addTimelineEntryRequestSchema,
  createOrUpdateIncidentRequestSchema,
  incidentDetailResponseSchema,
  incidentListResponseSchema,
  suggestionResponseSchema
} from "../../../application/dto/incidents.dto";
import { AddTimelineEntry } from "../../../application/usecases/add-timeline-entry";
import { CreateOrUpdateIncidentFromAlert } from "../../../application/usecases/create-or-update-incident-from-alert";
import { GetIncidentDetail } from "../../../application/usecases/get-incident-detail";
import { GetIncidentList } from "../../../application/usecases/get-incident-list";
import { SuggestNextSteps } from "../../../application/usecases/suggest-next-steps";
import { mapIncidentToDto } from "../../../application/mappers/incident.mapper";
import { ZodValidationPipe } from "../presenters/zod-validation.pipe";
import { presentWithSchema } from "../presenters/zod-presenter";

@Controller("incidents")
export class IncidentsController {
  constructor(
    private readonly getIncidentList: GetIncidentList,
    private readonly getIncidentDetail: GetIncidentDetail,
    private readonly createOrUpdateIncidentFromAlert: CreateOrUpdateIncidentFromAlert,
    private readonly addTimelineEntry: AddTimelineEntry,
    private readonly suggestNextSteps: SuggestNextSteps
  ) {}

  @Get()
  async list() {
    const items = await this.getIncidentList.execute();
    return presentWithSchema(incidentListResponseSchema, {
      items: items.map(mapIncidentToDto)
    });
  }

  @Get(":id")
  async detail(@Param("id") id: string) {
    const incident = await this.getIncidentDetail.execute(id);
    return presentWithSchema(incidentDetailResponseSchema, mapIncidentToDto(incident));
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createOrUpdateIncidentRequestSchema))
  async createOrUpdate(@Body() body: unknown) {
    const incident = await this.createOrUpdateIncidentFromAlert.execute(body as any);
    return presentWithSchema(incidentDetailResponseSchema, mapIncidentToDto(incident));
  }

  @Post("timeline")
  @UsePipes(new ZodValidationPipe(addTimelineEntryRequestSchema))
  async addTimeline(@Body() body: unknown) {
    await this.addTimelineEntry.execute(body.incidentId, body.entry);
    return { status: "ok" };
  }

  @Get(":id/suggestions")
  async suggest(@Param("id") id: string) {
    const suggestion = await this.suggestNextSteps.execute(id);
    return presentWithSchema(suggestionResponseSchema, suggestion);
  }
}
