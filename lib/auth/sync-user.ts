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
  try {
    const [user] = await db
      .insert(users)
      .values({
        id: authUser.id,
        email: authUser.email,
        name: authUser.name ?? null,
        role: "Partner", // 
        approved: false,
        image: authUser.image ?? null,
        lastActivity: new Date(),
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          email: authUser.email,
          name: authUser.name ?? null,
          image: authUser.image ?? null,
          lastActivity: new Date(),
        },
      })
      .returning();

    return user;
  } catch (err) {
    console.error("SYNC USER FAILED:", err);
    throw err;
  }
}