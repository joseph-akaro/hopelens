import { getUpdates } from "../queries/update.query";
import { update } from "../types/update";

export async function fetchupdates(): Promise<update[]> {
  const update = await getUpdates()

  console.log(update)
  return update as unknown as update[];
}