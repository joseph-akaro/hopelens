import { db } from "@/lib/db";
import { users } from "@/lib/schema/user";
import { eq } from "drizzle-orm";

type AuthUser = {
  id: string;
  email: string;
  name?: string | null;
};

export async function syncUser(authUser: AuthUser) {
  // 🔍 Check if user exists
  const existing = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, authUser.id),
  });

  // ✅ If exists → update (keep fresh)
  if (existing) {
    const [updated] = await db
      .update(users)
      .set({
        email: authUser.email,
        name: authUser.name ?? existing.name,
      })
      .where(eq(users.id, authUser.id))
      .returning();

    return updated;
  }

  // 🆕 If NOT exists → create
  try {
    const [newUser] = await db
      .insert(users)
      .values({
        id: authUser.id,
        email: authUser.email,
        name: authUser.name ?? null,
        role: "partner", // default role
      })
      .returning();

    return newUser;
  } catch (err: any) {
    // ⚠️ Handle race condition (very important)
    // If two requests try to create same user

    if (err.code === "23505") {
      // unique violation → fetch again
      const user = await db.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, authUser.id),
      });

      if (user) return user;
    }

    throw err;
  }
}