import type { Project, Country, Update } from "@/lib/schema";

export type ProjectWithDetails = Project & {
  participatingCountries: {
    country: Country;
  }[];
  updates: (Update & {
    country: Country | null;
  })[];
  deadline: Date;
};