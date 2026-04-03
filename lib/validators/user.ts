import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(100),
  email: z.string().nonoptional(),
  phone: z.string().optional(),
  role: z.enum(["admin", "champion", "partner"]).nonoptional().default("partner"),
  image: z.string().optional(),
  approved: z.boolean().default(false).nonoptional(),
  country: z.string(),
  createdAt: z.date().default(() => new Date()).nonoptional(),
  lastactivity: z.date().default(() => new Date()).nonoptional()
});