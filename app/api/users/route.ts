import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";
import { ok, error } from "@/lib/api/response";
import { NextRequest } from "next/server";
import { users } from "@/lib/schema/user";

export async function GET() {
  try {
    await requireAuth("admin");
    const allUsers = await db.query.users.findMany();
    return ok(allUsers);
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