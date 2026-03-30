import { db } from "@/lib/db";
import { UserDetail } from "../types/user";
import { requireAuth } from "../auth/permissions";
import { users } from "../schema";

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
    const users = await db.query.users.findMany();

    return users;
}

export async function getTotalChampions(): Promise<number> {
    await requireAuth("admin");
    const total = await db.query.users.findMany({
        where: (u, { eq }) => eq(u.role, "champion"),
    }).then(users => users.length);


    console.log("Total champions:", total);

    return total;
}
