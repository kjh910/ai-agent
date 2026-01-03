import { Module } from "@nestjs/common";

import { AddTimelineEntry } from "../../../application/usecases/add-timeline-entry";
import { CreateOrUpdateIncidentFromAlert } from "../../../application/usecases/create-or-update-incident-from-alert";
import { GetIncidentDetail } from "../../../application/usecases/get-incident-detail";
import { GetIncidentList } from "../../../application/usecases/get-incident-list";
import { SuggestNextSteps } from "../../../application/usecases/suggest-next-steps";
import { InMemoryIncidentRepository } from "../../../infrastructure/repositories/in-memory-incident.repository";
import { InMemoryVectorSearch } from "../../../infrastructure/vector/in-memory-vector-search";
import { StubLlmWriter } from "../../../infrastructure/llm/stub-llm-writer";
import { IncidentsController } from "./incidents.controller";

@Module({
  controllers: [IncidentsController],
  providers: [
    InMemoryIncidentRepository,
    InMemoryVectorSearch,
    StubLlmWriter,
    {
      provide: GetIncidentList,
      useFactory: (repo: InMemoryIncidentRepository) => new GetIncidentList(repo),
      inject: [InMemoryIncidentRepository]
    },
    {
      provide: GetIncidentDetail,
      useFactory: (repo: InMemoryIncidentRepository) =>
        new GetIncidentDetail(repo),
      inject: [InMemoryIncidentRepository]
    },
    {
      provide: CreateOrUpdateIncidentFromAlert,
      useFactory: (repo: InMemoryIncidentRepository) =>
        new CreateOrUpdateIncidentFromAlert(repo),
      inject: [InMemoryIncidentRepository]
    },
    {
      provide: AddTimelineEntry,
      useFactory: (repo: InMemoryIncidentRepository) =>
        new AddTimelineEntry(repo),
      inject: [InMemoryIncidentRepository]
    },
    {
      provide: SuggestNextSteps,
      useFactory: (
        repo: InMemoryIncidentRepository,
        vector: InMemoryVectorSearch,
        llm: StubLlmWriter
      ) => new SuggestNextSteps(repo, vector, llm),
      inject: [InMemoryIncidentRepository, InMemoryVectorSearch, StubLlmWriter]
    }
  ]
})
export class IncidentsModule {}
