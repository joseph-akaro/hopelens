import { getCurrentUser } from "./session";
import type { User } from "@/lib/schema";

export async function requireAuth(role?: "admin" | "champion" | "partner"): Promise<User> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  if (role && user.role !== role) throw new Error("Forbidden");

  return user;
}