import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(100),
  email: z.string(),
  phone: z.string().optional(),
  role: z.enum(["Admin", "Champion", "Partner"]),
  image: z.string().optional(),
  approved: z.boolean().default(false),
  countryId: z.number().int().positive(),
  createdAt: z.date().default(() => new Date()),
});