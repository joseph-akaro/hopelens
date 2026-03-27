import { db } from "@/lib/db";
import { countries } from "@/lib/schema";
import { requireAuth } from "@/lib/auth/permissions";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  await requireAuth("admin");

  const data = await db.query.countries.findMany({
    with: {
      participatingCountries: true,
    },
  });

  return Response.json(data);
}

export async function POST(req: NextRequest) {
  await requireAuth("admin");

  const body = await req.json();

  const [country] = await db
    .insert(countries)
    .values(body)
    .returning();

  return Response.json(country, { status: 201 });
}