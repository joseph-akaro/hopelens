import { db } from "../db";
import { countryType } from "../types/country";

export async function getCountries(): Promise<countryType[]> {
    const countries = await db.query.countries.findMany({
      columns: {
                    id: true,
                    status: true,
                    name: true,
                    email: true,
                    phone: true,
                },
      with: {
            region: true,
            users: true,
      },
});
  return countries as unknown as countryType[];
}