import { db } from "@/lib/db";
import { countries, users, updates } from "@/lib/schema";
import { update } from "../types/update";
import { eq, count, sql } from "drizzle-orm";

export async function getUpdates(): Promise<update> {
    const updates = await db.query.updates.findMany({
        with: {
            country: true,
            project: true,
        }
    })

    const formattedUpdate = updates.map((update) => {
      return {
        id: update.id,
        title: update.title,
        project: update.project?.title,
        country: update.country?.name,
        status: update.status,
        deadline: update.deadline?.toDateString()
      }
    })

    return formattedUpdate as unknown as update;
}

export const getPerformanceByCountry = async () => {
  return await db
    .select({
      countryName: countries.name,
      region: countries.regionId,
      championName: users.name,

      totalUpdates: count(updates.id),

      totalApproved: sql<number>`
        COUNT(CASE WHEN ${updates.status} = true THEN 1 END)
      `,

      totalPending: sql<number>`
        COUNT(CASE WHEN ${updates.status} = false THEN 1 END)
      `,
    })
    .from(countries)
    .leftJoin(users, eq(users.countryId, countries.id))
    .leftJoin(updates, eq(updates.countryId, users.id))
    .groupBy(countries.id, users.id);
};