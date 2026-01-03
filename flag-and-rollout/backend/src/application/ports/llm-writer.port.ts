export type LlmSuggestionInput = {
  incidentSummary: string;
  runbookSteps: string[];
  similarIncidentTitles: string[];
};

export type LlmSuggestionOutput = {
  summary: string;
  recommended_actions: string[];
  confidence: number;
};

export interface LlmWriterPort {
  writeSuggestion(input: LlmSuggestionInput): Promise<LlmSuggestionOutput>;
}
