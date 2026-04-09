import { countryType } from "../types/country";
import { update } from "../types/update";
import { countries, updates } from "../schema";
import { db } from "../db";
import { eq } from "drizzle-orm";

/**
 * Function: Gets performance by country
 * @param countryId: country id filters
 * @param total: total updates
 * 
 * @returns: { Country name, Region, Champion, total updates, total approved, total pendding}
 */

interface performanceByCountryProp {
    countryId?: string,
    projectId?: string,
    period?: Date,
}

export async function PerformanceByCountry(){
    const country = await db.query.countries.findMany({
        
    })
}