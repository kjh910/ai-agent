import { z } from "zod";

export const policySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string()
});

export const policyListResponseSchema = z.object({
  items: z.array(policySchema)
});
