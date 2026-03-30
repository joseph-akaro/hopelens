import { db } from "@/lib/db";
import type { ProjectWithDetails } from "@/lib/types/project";

export async function getProjectsFull(): Promise<ProjectWithDetails[]> {
  const projects = await  db.query.projects.findMany({
    with: {
      participatingCountries: {
        with: {
          country: true,
        },
      },
      updates: {
        with: {
          country: true,
        },
        orderBy: (u, { desc }) => [desc(u.createdAt)],
      },
    },
  });

  return projects as unknown as ProjectWithDetails[];
}