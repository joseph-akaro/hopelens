import { db } from "@/lib/db";
import { updates } from "@/lib/schema/user";
import { requireAuth } from "@/lib/auth/permissions";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await requireAuth();
  const { id } = await context.params;

  const update = await db.query.updates.findFirst({
    where: (u, { eq }) => eq(u.id, Number(id)),
    with: { project: true, country: true },
  });

  if (!update) return new Response("Not Found", { status: 404 });

  return Response.json(update);
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const user = await requireAuth();
  const { id } = await context.params;
  const body = await req.json();

  const [updated] = await db
    .update(updates)
    .set(body)
    .where(eq(updates.id, Number(id)))
    .returning();

  return Response.json(updated);
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await requireAuth("admin");
  const { id } = await context.params;

  await db.delete(updates).where(eq(updates.id, Number(id)));

  return new Response("Deleted");
}