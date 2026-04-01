import { getCountries } from "../queries/country.query";
import { countryType } from "@/lib/types/country";


export async function fetchCountries(): Promise<countryType[]> {
    const countries = await getCountries();
    console.log(countries)
    
    const formattedCountry = countries.map((country) => ({
        id: country.id,
        status: country.status,
        name: country.name,
        region: country.region?.name,
        email: country.email,
        phone: country.phone,
        champion: country.champion?.name,
    }));

    return formattedCountry as unknown as countryType[];
}