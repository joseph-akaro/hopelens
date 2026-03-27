import { auth } from "@/lib/auth/server";
import { syncUser } from "./sync-user";
import type { User } from "@/lib/schema";

export async function getCurrentUser(): Promise<User | null> {
  const { data: session } = await auth.getSession();

  if (!session?.user) return null;

  const user = await syncUser({
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
  });

  return user;
}