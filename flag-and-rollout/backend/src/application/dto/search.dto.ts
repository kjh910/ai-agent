import { z } from "zod";

export const indexDocRequestSchema = z.object({
  id: z.string(),
  content: z.string(),
  metadata: z.record(z.string()).optional()
});

export const searchSimilarRequestSchema = z.object({
  query: z.string(),
  limit: z.number().min(1).max(20).default(5)
});

export const searchSimilarResponseSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      content: z.string(),
      score: z.number()
    })
  )
});
