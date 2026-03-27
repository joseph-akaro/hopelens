import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";
import { ok, error } from "@/lib/api/response";
import { NextRequest } from "next/server";
import { countries, users } from "@/lib/schema";

export async function GET() {
  try {
    await requireAuth("admin");
    const allUsers = await db.query.users.findMany({
      with:{
        countries: true
      }
    }
    );
    return ok(JSON.stringify(allUsers));
  } catch (err: any) {
    return error(err.message, err.message === "Unauthorized" ? 403 : 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAuth("admin");
    const body = await req.json();

    const [newUser] = await db.insert(users).values({
      id: body.id,
      email: body.email,
      name: body.name ?? null,
      role: body.role ?? "partner",
    }).returning();

    return ok(newUser, 201);
  } catch (err: any) {
    return error(err.message);
  }
}