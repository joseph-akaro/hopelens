import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";
import { NextRequest } from "next/server";
import { ok, error } from "@/lib/api/response";

export async function GET(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    await requireAuth();
    const { id } = await context.params;

    const user = await db.query.users.findFirst({ where: (u, { eq }) => eq(u.id, id) });
    if (!user) return error("Not Found", 404);

    return ok(user);
  } catch (err: any) {
    return error(err.message, err.message === "Unauthorized" ? 403 : 500);
  }
}