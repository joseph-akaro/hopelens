import { getProjectsFull } from "@/lib/queries/project.query";
import type { ProjectWithDetails } from "@/lib/types/project";
import type { User } from "@/lib/schema";

export async function fetchProjectsWithDetails(): Promise<ProjectWithDetails[]> {
  const projects = await getProjectsFull();
  return projects;
}

export async function fetchProjectsForUser(
  user: User
): Promise<ProjectWithDetails[]> {
  if (user.role === "Champion" && user.countryId) {
    return getProjectsFull();
  }

  console.log(getProjectsFull())

  return getProjectsFull();
}