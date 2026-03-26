import { getCurrentUser } from "./session";
import type { User } from "@/lib/schema/user";

export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}