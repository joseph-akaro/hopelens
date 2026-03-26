import { getProjectsFull } from "@/lib/queries/project.query";
import type { ProjectWithDetails } from "@/lib/types/project";
import type { User } from "@/lib/schema/user";

export async function fetchProjectsWithDetails(): Promise<ProjectWithDetails[]> {
  return getProjectsFull();
}

export async function fetchProjectsForUser(
  user: User
): Promise<ProjectWithDetails[]> {
  if (user.role === "champion" && user.countryId) {
    return getProjectsFull(); // later: filter here
  }

  return getProjectsFull();
}