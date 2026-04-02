import { z } from "zod";


export const createCountrySchema = z.object({
    id: z.number().int().positive().optional(),
    status: z.string().nonoptional(),
    name: z.string().min(1),
    region: z.string().min(1),
    users: z.string(),
    lastactivity: z.date(),
});