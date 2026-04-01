import { db } from "@/lib/db";
import { users } from "@/lib/schema"
import { eq } from "drizzle-orm";

type AuthUser = {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  lastActivity?: Date;
};

export async function syncUser(authUser: AuthUser) {

  const existing = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, authUser.id),
  });

  if (existing) {
    const [updated] = await db
      .update(users)
      .set({
        email: authUser.email,
        name: authUser.name ?? existing.name,
        image: authUser.image ?? existing.image,
        lastActivity: new Date()
      })
      .where(eq(users.id, authUser.id))
      .returning();

    return updated;
  }

  try {
    const [newUser] = await db
      .insert(users)
      .values({
        id: authUser.id,
        email: authUser.email,
        name: authUser.name ?? null,
        role: "Partner",
        approved: false,
        image: authUser.image ?? null,
        lastActivity: new Date(),
      })
      .returning();

    return newUser;
  } catch (err: any) {


    if (err.code === "23505") {
      
      const user = await db.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, authUser.id),
      });

      if (user) return user;
    }

    throw err;
  }
}