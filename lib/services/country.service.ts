import { getCountries } from "../queries/country.query";
import { countryType } from "@/lib/types/country";


export async function fetchCountries(): Promise<countryType[]> {
    const countries = await getCountries();
    return countries;
}