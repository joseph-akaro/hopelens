import { db } from "../db";
import { update } from "../types/update";


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
        deadline: update.deadline
      }
    })

    return formattedUpdate as unknown as update;
} 