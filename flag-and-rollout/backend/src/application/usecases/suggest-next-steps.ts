import { IncidentRepository } from "../ports/incident.repository";
import { LlmWriterPort } from "../ports/llm-writer.port";
import { VectorSearchPort } from "../ports/vector-search.port";
import { suggestionResponseSchema } from "../dto/incidents.dto";

export class SuggestNextSteps {
  constructor(
    private readonly incidentRepository: IncidentRepository,
    private readonly vectorSearch: VectorSearchPort,
    private readonly llmWriter: LlmWriterPort
  ) {}

  async execute(incidentId: string) {
    const incident = await this.incidentRepository.getById(incidentId);
    if (!incident) {
      throw new Error("Incident not found");
    }

    const similar = await this.vectorSearch.searchSimilar(
      incident.summary,
      3
    );

    const suggestion = await this.llmWriter.writeSuggestion({
      incidentSummary: incident.summary,
      runbookSteps: incident.runbook.map((step) => step.step),
      similarIncidentTitles: similar.map((item) => item.content)
    });

    return suggestionResponseSchema.parse(suggestion);
  }
}
