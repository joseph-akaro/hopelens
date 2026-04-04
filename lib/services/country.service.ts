import { getCountries } from "../queries/country.query";
import { countryType } from "@/lib/types/country";
import { insertCountry } from "../queries/country.query";
import { users } from "../schema";


export async function fetchCountries(): Promise<countryType[]> {
    const countries = await getCountries();
    
    const formattedCountry = countries.map((country) => ({
        id: country.id,
        status: country.status,
        name: country.name,
        region: country.region?.name,
        email: country.email,
        phone: country.phone,
    }));

    console.log(formattedCountry)

    return formattedCountry as unknown as countryType[];
}


export async function createCountry(data: {
  country: string;
  email: string;
  phone: number;
  regionId: number;
}) {
  if (!data.country) {
    throw new Error("Country name is required");
  }

  try {
    const [country] = await insertCountry(data);
    return country;
  } catch (error) {
    throw new Error("Failed to create country");
  }
}