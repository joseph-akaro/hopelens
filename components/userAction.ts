import { getCurrentUser } from "@/lib/auth/session";
import { UserDetail } from "@/lib/types/user";

export async function currentUser(){
    const user = await getCurrentUser()

    return user as unknown as UserDetail[];
}


export const UserInfo = currentUser() as unknown as UserDetail[];