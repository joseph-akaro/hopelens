"use server"
import { UserDetail } from "../types/user";
import { getAllUsers, getTotalChampions } from "../queries/user.query";

export async function fetchAllUsers(): Promise<UserDetail[]> {
    const users = await getAllUsers();

    const formattedUsers = users.map((user) => ({
        id: user.id,
        image: user.image,
        name: user.name,
        email: user.email,
        phone: user.phone,
        country: user.country?.name,
        approved: user.approved,
        role: user.role,
        lastActivity: user.lastActivity
    }));


    return formattedUsers as unknown as UserDetail[];
}

export async function fetchTotalChampions(): Promise<number> {
    const total = await getTotalChampions();
    return total;
}