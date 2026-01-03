import { z } from "zod";

export const kpiCardSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.number(),
  unit: z.string().optional(),
  trend: z.string().optional()
});

export type KpiCard = z.infer<typeof kpiCardSchema>;
