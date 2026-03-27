import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";
import { ok, error } from "@/lib/api/response";
import { NextRequest } from "next/server";
import { users } from "@/lib/schema";

function getRelativeTime(date: Date) {
  const diff = (Date.now() - date.getTime()) / 1000

  if (diff < 60) return "just now"
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`

  return `${Math.floor(diff / 86400)} days ago`
}

export async function GET() {
  try {
    await requireAuth("admin");
    const allUsers = await db.query.users.findMany();

    const formatDate = (date: Date) => {
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date)
    }

    const formatted = allUsers.map((user) => ({
      ...user,
      phone: user.phone ? String(user.phone) : null,
      createdAtFormatted: new Date(user.createdAt).toDateString().slice(4),
      lastActivityFormatted: user.lastActivity
        ? getRelativeTime(user.lastActivity)
        : "—",
    }))

    return  Response.json(formatted);
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