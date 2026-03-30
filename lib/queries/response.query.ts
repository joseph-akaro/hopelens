import { db } from "@/lib/db"
import { projects, updates, participatingCountries } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function getOverallResponseRate() {
  // 1. Get all assignments (expected responses)
  const assignments = await db
    .select({
      projectId: participatingCountries.projectId,
      countryId: participatingCountries.countryId,
      deadline: projects.deadline,
    })
    .from(participatingCountries)
    .innerJoin(projects, eq(projects.id, participatingCountries.projectId))

  // 2. Get all updates
  const allUpdates = await db.select().from(updates)

  // 3. Map updates (project + country → earliest update)
  const updateMap = new Map<string, Date>()

  for (const update of allUpdates) {
    if (!update.projectId || !update.countryId) continue

    const key = `${update.projectId}-${update.countryId}`

    const existing = updateMap.get(key)

    if (!existing || update.createdAt < existing) {
      updateMap.set(key, update.createdAt)
    }
  }

  // 4. Count totals
  let totalExpected = 0
  let totalResponded = 0

  for (const assignment of assignments) {
    totalExpected++

    const key = `${assignment.projectId}-${assignment.countryId}`
    const updateDate = updateMap.get(key)

    if (
      updateDate &&
      new Date(updateDate) <= new Date(assignment.deadline)
    ) {
      totalResponded++
    }
  }

  // 5. Final response rate
  const responseRate =
    totalExpected === 0
      ? 0
      : Math.round((totalResponded / totalExpected) * 100)

  return {
    responseRate,
    totalExpected,
    totalResponded,
  }
}