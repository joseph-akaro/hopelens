import { z } from "zod";
import { countryType } from "../types/country";
import { id } from "zod/v4/locales";

export const createCountrySchema = z.object({
    id: z.number().int().positive().optional(),
    name: z.string().min(1),
    region: z.string().min(1),
    champion: z.string().min(1),
    lastupdate: z.string().min(1),
});