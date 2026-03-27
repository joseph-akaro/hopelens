import { db } from "@/lib/db";
import { updates } from "@/lib/schema";
import { requireAuth } from "@/lib/auth/permissions";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    await requireAuth();

    const data = await db.query.updates.findMany({
      with: {
        project: true,
        country: true,
      },
    });

    return Response.json(data);
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth();

    if (user.role !== "champion" && user.role !== "admin") {
      return new Response("Forbidden", { status: 403 });
    }

    const body = await req.json();

    const [update] = await db
      .insert(updates)
      .values({
        title: body.title,
        body: body.body,
        projectId: body.projectId,
        countryId: user.countryId, // enforce ownership
      })
      .returning();

    return Response.json(update, { status: 201 });
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}