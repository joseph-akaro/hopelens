import { UsersTable } from "@/components/userTable";

import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";

async function getUsers() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`);

    if (!res.headers.get("content-type")?.includes("application/json")) {
    throw new Error("Response is not JSON");
    }

    const users = await res.json();

    return users
}

export default async function UsersPage() {

    await requireAuth("admin");
    const users = await getUsers();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Users</h1>
      <UsersTable data={users} />
    </div>
  );
}