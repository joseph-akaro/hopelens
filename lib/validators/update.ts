import z from "zod";

export const updateSchema = z.object({
    id: z.int().nonoptional(),
    title: z.string(),
    body: z.string(),
    projectId: z.uuid().nonoptional(),
    countryId: z.int().nonoptional(),
    deadline: z.date(),
})