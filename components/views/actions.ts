import { getAllUsers } from "@/lib/queries/user.query"

export async function getUsers() {

  const users = await getAllUsers();
  return users;
}