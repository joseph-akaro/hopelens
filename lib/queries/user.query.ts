import { db } from "@/lib/db";
import { UserDetail } from "../types/user";
import { requireAuth } from "../auth/permissions";

export async function getUserDetail(): Promise<UserDetail[]> {
    const session = await requireAuth("Admin");

    const user = await db.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, session.id),
    });

    if (!user) {
        throw new Error("User not found");
    }

    return user as unknown as UserDetail[];
} 

export async function getAllUsers(): Promise<UserDetail[]> {
    const users = await db.query.users.findMany({
        columns: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    role: true,
                    image: true,
                    approved: true,
                },
                with: {
                    country: true,
                },
                }
);

    return users as unknown as UserDetail[];
}

export async function getTotalChampions(): Promise<number> {
    const total = await db.query.users.findMany({
        where: (u, { eq }) => eq(u.role, "Champion"),
    }).then((total) => total.length)

    return total as unknown as number;
}
