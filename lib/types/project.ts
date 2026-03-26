import type { Project, Country, Update } from "@/lib/schema/user";

export type ProjectWithDetails = Project & {
  participatingCountries: {
    country: Country;
  }[];
  updates: (Update & {
    country: Country | null;
  })[];
};