import { db } from "@/lib/db";
import { participatingCountries } from "@/lib/schema/user";
import { requireAuth } from "@/lib/auth/permissions";
import { NextRequest } from "next/server";

export async function GET() {
  await requireAuth();

  const data = await db.query.participatingCountries.findMany({
    with: {
      project: true,
      country: true,
    },
  });

  return Response.json(data);
}

export async function POST(req: NextRequest) {
  await requireAuth("admin");

  const body = await req.json();

  const [entry] = await db
    .insert(participatingCountries)
    .values({
      projectId: body.projectId,
      countryId: body.countryId,
    })
    .returning();

  return Response.json(entry, { status: 201 });
}