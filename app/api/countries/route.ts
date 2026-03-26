import { db } from "@/lib/db";
import { requireAuth } from "@/lib/auth/permissions";
import { ok, error } from "@/lib/api/response";

export async function GET() {
  try {
    await requireAuth("admin");
    const allCountries = await db.query.countries.findMany();
    return ok(allCountries);
  } catch (err: any) {
    return error(err.message, err.message === "Unauthorized" ? 403 : 500);
  }
}