import { db } from "@/lib/db";
import type { ProjectWithDetails } from "@/lib/types/project";


export async function getAllProjects(): Promise<ProjectWithDetails[]>{
  const allprojects = await db.query.projects.findMany({
    with: {
      participatingCountries: true,
      updates: true
    }
  })

  console.log(allprojects)

  return allprojects as unknown as ProjectWithDetails[]
}

export async function getProjectsFull(): Promise<ProjectWithDetails[]> {
  const projects = await  db.query.projects.findMany({
    with: {
      participatingCountries: true,
    }
  })
  return projects as unknown as ProjectWithDetails[];
}