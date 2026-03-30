import { getCurrentUser } from "./session";
import type { User } from "@/lib/schema";
import { cookies } from "next/headers";

export async function requireAuth(role?: "admin" | "champion" | "partner"): Promise<User> {
  const cookieStore = cookies(); // ensures request context exists

  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  if (role && user.role !== role) throw new Error("Forbidden");

  return user;
}