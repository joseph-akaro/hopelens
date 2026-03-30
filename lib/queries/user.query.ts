import { db } from "@/lib/db";
import { UserDetail } from "../types/user";
import { requireAuth } from "../auth/permissions";
import { cookies } from "next/headers";
import { rolesEnum } from "../schema";

export async function getUserDetail(): Promise<UserDetail> {
    cookies()
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
    const total = await db.query.users.findMany({
        where: (u, { eq }) => eq(u.role, "champion"),
    }).then((total) => total.length)

    return total as unknown as number;
}
