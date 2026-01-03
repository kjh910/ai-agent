import { z } from "zod";

export const integrationSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.enum(["Connected", "Pending", "Disconnected"])
});

export const integrationListResponseSchema = z.object({
  items: z.array(integrationSchema)
});
