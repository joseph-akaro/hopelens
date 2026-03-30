import { UserDetail } from "../types/user";
import { getAllUsers } from "../queries/user.query";

export async function fetchAllUsers(): Promise<UserDetail[]> {
    const users = await getAllUsers();
    return users;
}