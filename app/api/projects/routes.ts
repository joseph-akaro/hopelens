import { db } from "@/lib/db";
import { projects } from "@/lib/schema/user";
import { requireAuth } from "@/lib/auth/permissions";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const user = await requireAuth();

    const data = await db.query.projects.findMany({
      with: {
        participatingCountries: {
          with: { country: true },
        },
        updates: {
          with: { country: true },
        },
      },
    });

    return Response.json(data);
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAuth("admin");

    const body = await req.json();

    const [project] = await db
      .insert(projects)
      .values({
        title: body.title,
        description: body.description,
        shortDescription: body.shortDescription,
        deadline: body.deadline,
        imageUrl: body.imageUrl ?? null,
      })
      .returning();

    return Response.json(project, { status: 201 });
  } catch {
    return new Response("Unauthorized", { status: 403 });
  }
}