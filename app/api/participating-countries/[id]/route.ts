import { db } from "@/lib/db";
import { participatingCountries } from "@/lib/schema";
import { requireAuth } from "@/lib/auth/permissions";
import { and, eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest
) {
  await requireAuth("admin");

  const { projectId, countryId } = await req.json();

  await db.delete(participatingCountries).where(
    and(
      eq(participatingCountries.projectId, projectId),
      eq(participatingCountries.countryId, countryId)
    )
  );

  return new Response("Deleted");
}