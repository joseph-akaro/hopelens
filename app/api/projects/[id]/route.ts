import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";
import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    await requireAuth();

    // ✅ FIX: await params
    const { id } = await context.params;

    const project = await db.query.projects.findFirst({
      where: (p, { eq }) => eq(p.id, id),
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