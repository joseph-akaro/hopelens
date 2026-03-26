import { fetchProjectsForUser } from "@/lib/services/project.service";
import { requireAuth } from "@/lib/auth/permissions";
import type { ProjectWithDetails } from "@/lib/types/project";

export async function GET(): Promise<Response> {
  try {
    const user = await requireAuth();

    const data: ProjectWithDetails[] =
      await fetchProjectsForUser(user);

    return Response.json(data);
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}