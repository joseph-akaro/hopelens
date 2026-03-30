import { db } from "@/lib/db";
import { UserDetail } from "../types/user";
import { requireAuth } from "../auth/permissions";

export async function getUserDetail(): Promise<UserDetail> {
    const session = await requireAuth("admin");

    const user = await db.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, session.id),
    });

    if (!user) {
        throw new Error("User not found");
    }

    return user;
} 

export async function getAllUsers(): Promise<UserDetail[]> {
    await requireAuth("admin");
    return db.query.users.findMany();
}
