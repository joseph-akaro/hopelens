// actions/user.action.ts
"use server";

import { getCurrentUser } from "@/lib/auth/session";

export async function getCurrentUserAction() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}