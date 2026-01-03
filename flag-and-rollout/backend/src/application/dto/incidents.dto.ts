import { z } from "zod";

export const incidentSeveritySchema = z.enum(["Sev1", "Sev2", "Sev3", "Sev4"]);
export const incidentStatusSchema = z.enum([
  "Investigating",
  "Mitigating",
  "Monitoring",
  "Resolved"
]);

export const timelineEntrySchema = z.object({
  id: z.string(),
  time: z.string(),
  title: z.string(),
  description: z.string()
});

export const runbookStepSchema = z.object({
  step: z.string(),
  owner: z.string(),
  status: z.enum(["Done", "In Progress", "Blocked"])
});

export const similarIncidentSchema = z.object({
  id: z.string(),
  title: z.string(),
  similarity: z.number()
});

export const incidentSchema = z.object({
  id: z.string(),
  title: z.string(),
  service: z.string(),
  severity: incidentSeveritySchema,
  status: incidentStatusSchema,
  startedAt: z.string(),
  owner: z.string(),
  summary: z.string(),
  timeline: z.array(timelineEntrySchema),
  runbook: z.array(runbookStepSchema),
  similarIncidents: z.array(similarIncidentSchema)
});

export const incidentListResponseSchema = z.object({
  items: z.array(incidentSchema)
});

export const incidentDetailResponseSchema = incidentSchema;

export const createOrUpdateIncidentRequestSchema = z.object({
  id: z.string(),
  title: z.string(),
  service: z.string(),
  severity: incidentSeveritySchema,
  status: incidentStatusSchema,
  startedAt: z.string(),
  owner: z.string(),
  summary: z.string().optional()
});

export const addTimelineEntryRequestSchema = z.object({
  incidentId: z.string(),
  entry: timelineEntrySchema
});

export const suggestionResponseSchema = z.object({
  summary: z.string(),
  recommended_actions: z.array(z.string()),
  confidence: z.number()
});

export type IncidentDto = z.infer<typeof incidentSchema>;
export type IncidentListResponse = z.infer<typeof incidentListResponseSchema>;
export type CreateOrUpdateIncidentRequest = z.infer<
  typeof createOrUpdateIncidentRequestSchema
>;
export type AddTimelineEntryRequest = z.infer<
  typeof addTimelineEntryRequestSchema
>;
export type SuggestionResponse = z.infer<typeof suggestionResponseSchema>;
