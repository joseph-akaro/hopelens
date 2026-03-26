import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  shortDescription: z.string(),
  deadline: z.string(),
});