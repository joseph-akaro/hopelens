import { db } from "@/lib/db"
import { getOverallResponseRate } from "@/lib/queries/response.query"
import { responseRateType } from "../types/response";

export async function fetchOverallResponseRate(): Promise<responseRateType> {
    const rate = await getOverallResponseRate();
  return rate as unknown as responseRateType;
}