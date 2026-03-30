import { UserDetail } from "../types/user";
import { getUserDetail } from "../queries/user.query";

export async function fetchAllUsers(): Promise<UserDetail[]> {
    const user = await getUserDetail();
    if (user.role !== "admin") {
        throw new Error("Unauthorized");
    }
  return user as unknown as UserDetail[];
}