import { UserDetail } from "../types/user";
import { getAllUsers } from "../queries/user.query";
import { User } from "../schema";

export async function fetchAllUsers(): Promise<UserDetail[]> {
    const users = await getAllUsers();

    const formattedUsers = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        countryId: user.countryId,
        approved: user.approved,
        role: user.role,
        lastActivity: datetime(user.lastActivity)
    }));

    return formattedUsers as unknown as User[];
}

const datetime = (date: Date): string => {
    const lastActivity = new Date(date);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - lastActivity.getTime()) / 60000);
    if (diffInMinutes < 1) {
        return "Just now";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    } else if (diffInMinutes < 1440) {
        const hours = Math.floor(diffInMinutes / 60);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
        const days = Math.floor(diffInMinutes / 1440);
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
}