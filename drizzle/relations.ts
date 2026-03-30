import { relations } from "drizzle-orm/relations";
import { countries, users, regions, projects, updates, participatingCountries } from "./schema";

export const usersRelations = relations(users, ({one}) => ({
	country: one(countries, {
		fields: [users.countryId],
		references: [countries.id]
	}),
}));

export const countriesRelations = relations(countries, ({one, many}) => ({
	users: many(users),
	region: one(regions, {
		fields: [countries.regionId],
		references: [regions.id]
	}),
	updates: many(updates),
	participatingCountries: many(participatingCountries),
}));

export const regionsRelations = relations(regions, ({many}) => ({
	countries: many(countries),
}));

export const updatesRelations = relations(updates, ({one}) => ({
	project: one(projects, {
		fields: [updates.projectId],
		references: [projects.id]
	}),
	country: one(countries, {
		fields: [updates.countryId],
		references: [countries.id]
	}),
}));

export const projectsRelations = relations(projects, ({many}) => ({
	updates: many(updates),
	participatingCountries: many(participatingCountries),
}));

export const participatingCountriesRelations = relations(participatingCountries, ({one}) => ({
	project: one(projects, {
		fields: [participatingCountries.projectId],
		references: [projects.id]
	}),
	country: one(countries, {
		fields: [participatingCountries.countryId],
		references: [countries.id]
	}),
}));