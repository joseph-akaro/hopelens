import { db } from "../db";
import { countries } from "../schema";
import { countryType } from "../types/country";

export async function getCountries(): Promise<countryType[]> {
    const countries = await db.query.countries.findMany();
  return countries as unknown as countryType[];
}