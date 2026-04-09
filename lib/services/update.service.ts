import { getUpdates } from "../queries/update.query";
import { update } from "../types/update";
import { getPerformanceByCountry } from "../queries/update.query";

export const fetchCountryPerformance = async () => {
  const data = await getPerformanceByCountry();


  console.log(data)

  return data.map((item) => ({
    ...item,
    totalUpdates: Number(item.totalUpdates),
    totalApproved: Number(item.totalApproved),
    totalPending: Number(item.totalPending),
  }));
};

export async function fetchupdates(): Promise<update[]> {
  const update = await getUpdates()

  return update as unknown as update[];
}