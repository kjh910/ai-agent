import { z } from "zod";

export const featureStatusSchema = z.enum([
  "Off",
  "Limited",
  "On",
  "Paused"
]);

export const featureMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
  delta: z.string().optional()
});

export const featureFlagSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  owner: z.string(),
  status: featureStatusSchema,
  rolloutPercentage: z.number(),
  approvalRequired: z.boolean(),
  lastUpdated: z.string(),
  metrics: z.array(featureMetricSchema)
});

export const featureFlagListResponseSchema = z.object({
  items: z.array(featureFlagSchema)
});

export const evaluateFlagRequestSchema = z.object({
  flagId: z.string(),
  context: z.record(z.string()).optional()
});

export const evaluateFlagResponseSchema = z.object({
  flagId: z.string(),
  enabled: z.boolean(),
  reason: z.string()
});

export const proposeRolloutChangeRequestSchema = z.object({
  flagId: z.string(),
  requestedPercentage: z.number().min(0).max(100)
});

export const proposeRolloutChangeResponseSchema = z.object({
  flagId: z.string(),
  approved: z.boolean(),
  reason: z.string(),
  proposedPercentage: z.number().min(0).max(100)
});

export const applyRolloutChangeRequestSchema = z.object({
  flagId: z.string(),
  approved: z.boolean()
});

export const applyRolloutChangeResponseSchema = z.object({
  flagId: z.string(),
  rolloutPercentage: z.number().min(0).max(100),
  status: featureStatusSchema
});

export type FeatureFlagDto = z.infer<typeof featureFlagSchema>;
