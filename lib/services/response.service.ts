import { db } from "@/lib/db"
import { getOverallResponseRate } from "@/lib/queries/response.query"
import { responseRateType } from "../types/response";

export async function fetchOverallResponseRate(): Promise<number> {
    const rate = await getOverallResponseRate();
  return rate.responseRate as unknown as number;
}