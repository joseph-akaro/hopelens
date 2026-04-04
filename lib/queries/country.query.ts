import { db } from "../db";
import { countryType } from "../types/country";
import { countries } from "../schema";

export async function getCountries(): Promise<countryType[]> {
    const countries = await db.query.countries.findMany({
      with: {
            region: true,
      },
});

  return countries as unknown as countryType[];
}


export async function insertCountry(data: {
  country: string,
  email: string,
  phone: number,
  regionId: number,
}) {
  return await db.insert(countries).values({
    name: data.country,
    email: data.email,
    phone: data.phone,
    regionId: data.regionId,
  }).returning();
}