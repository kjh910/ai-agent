import { ZodSchema } from "zod";

export function presentWithSchema<T>(schema: ZodSchema<T>, payload: T): T {
  return schema.parse(payload);
}
