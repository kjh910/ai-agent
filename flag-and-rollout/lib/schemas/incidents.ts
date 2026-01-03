import { z } from "zod";

export const severitySchema = z.enum(["Sev1", "Sev2", "Sev3", "Sev4"]);
export const incidentStatusSchema = z.enum([
  "Investigating",
  "Mitigating",
  "Resolved",
  "Monitoring"
]);

export const incidentSchema = z.object({
  id: z.string(),
  title: z.string(),
  service: z.string(),
  severity: severitySchema,
  status: incidentStatusSchema,
  startedAt: z.string(),
  owner: z.string()
});

export const incidentTimelineEventSchema = z.object({
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

export const incidentDetailSchema = incidentSchema.extend({
  summary: z.string(),
  timeline: z.array(incidentTimelineEventSchema),
  runbook: z.array(runbookStepSchema),
  similarIncidents: z.array(similarIncidentSchema)
});

export type Incident = z.infer<typeof incidentSchema>;
export type IncidentDetail = z.infer<typeof incidentDetailSchema>;
export type IncidentTimelineEvent = z.infer<typeof incidentTimelineEventSchema>;
export type RunbookStep = z.infer<typeof runbookStepSchema>;
export type SimilarIncident = z.infer<typeof similarIncidentSchema>;
