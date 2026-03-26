import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";
import type { ProjectWithDetails } from "@/lib/types/project";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    await requireAuth();

    const project = await db.query.projects.findFirst({
      where: (p, { eq }) => eq(p.id, params.id),
      with: {
        participatingCountries: {
          with: { country: true },
        },
        updates: {
          with: { country: true },
        },
      },
    });

    if (!project) {
      return new Response("Not Found", { status: 404 });
    }

    return Response.json(project);
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}