import { LlmWriterPort, LlmSuggestionInput, LlmSuggestionOutput } from "../../application/ports/llm-writer.port";

export class StubLlmWriter implements LlmWriterPort {
  async writeSuggestion(input: LlmSuggestionInput): Promise<LlmSuggestionOutput> {
    return {
      summary: `Draft summary: ${input.incidentSummary}. Human approval required.`,
      recommended_actions: [
        "Confirm partner status",
        "Throttle traffic",
        "Notify incident commander"
      ],
      confidence: 0.62
    };
  }
}
