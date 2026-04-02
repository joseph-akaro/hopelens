"use server";

import { createCountry } from "@/lib/services/country.service";
import { revalidatePath } from "next/cache";

export async function createCountryAction(formData: FormData) {
  const country = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as unknown as number;
  const regionId = Number(formData.get("regionId"));

  await createCountry({
    country,
    email,
    phone,
    regionId
  });

  revalidatePath("/countries");
}