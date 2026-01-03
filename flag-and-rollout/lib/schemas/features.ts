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

export type FeatureFlag = z.infer<typeof featureFlagSchema>;
export type FeatureMetric = z.infer<typeof featureMetricSchema>;
