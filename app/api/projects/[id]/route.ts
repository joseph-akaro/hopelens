import { db } from "@/lib/db";
import { projects } from "@/lib/schema/user";
import { requireAuth } from "@/lib/auth/permissions";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();

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

    if (!project) return new Response("Not Found", { status: 404 });

    return Response.json(project);
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth("admin");

    const { id } = await context.params;
    const body = await req.json();

    const [updated] = await db
      .update(projects)
      .set(body)
      .where(eq(projects.id, id))
      .returning();

    return Response.json(updated);
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth("admin");

    const { id } = await context.params;

    await db.delete(projects).where(eq(projects.id, id));

    return new Response("Deleted");
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}