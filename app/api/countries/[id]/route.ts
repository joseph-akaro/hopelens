import { db } from "@/lib/db";
import { countries } from "@/lib/schema/user";
import { requireAuth } from "@/lib/auth/permissions";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await requireAuth();
  const { id } = await context.params;

  const country = await db.query.countries.findFirst({
    where: (c, { eq }) => eq(c.id, Number(id)),
  });

  if (!country) return new Response("Not Found", { status: 404 });

  return Response.json(country);
}