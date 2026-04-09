import { fetchProjectsWithDetails } from "@/lib/services/project.service";



export async function GetProjects(){
    const results = await fetchProjectsWithDetails()

    console.log(results)
    return results
}