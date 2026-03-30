import { pgTable, uniqueIndex, foreignKey, text, varchar, integer, boolean, timestamp, index, uuid, date, primaryKey, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const projectStatus = pgEnum("project_status", ['draft', 'active', 'completed', 'overdue'])
export const roles = pgEnum("roles", ['partner', 'champion', 'admin'])


export const users = pgTable("users", {
	id: text().primaryKey().notNull(),
	name: varchar({ length: 256 }),
	email: varchar().notNull(),
	phone: integer(),
	role: roles().default('partner'),
	approved: boolean().default(false),
	lastActivity: timestamp("last_activity", { mode: 'string' }).defaultNow(),
	countryId: integer("country_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	image: varchar({ length: 256 }),
}, (table) => [
	uniqueIndex("users_email_unique").using("btree", table.email.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.countryId],
			foreignColumns: [countries.id],
			name: "users_country_id_countries_id_fk"
		}),
]);

export const regions = pgTable("regions", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "regions_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar({ length: 256 }).default('No Region'),
});

export const countries = pgTable("countries", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "countries_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar({ length: 256 }),
	email: varchar().notNull(),
	phone: integer().notNull(),
	regionId: integer("region_id"),
}, (table) => [
	index("countries_email_idx").using("btree", table.email.asc().nullsLast().op("text_ops")),
	index("countries_region_idx").using("btree", table.regionId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.regionId],
			foreignColumns: [regions.id],
			name: "countries_region_id_regions_id_fk"
		}),
]);

export const projects = pgTable("projects", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	imageUrl: varchar("image_url"),
	title: varchar().notNull(),
	shortDescription: text("short_description").notNull(),
	description: text().notNull(),
	status: projectStatus().default('draft'),
	deadline: date().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});

export const updates = pgTable("updates", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "updates_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	title: varchar().notNull(),
	body: text().notNull(),
	projectId: uuid("project_id"),
	countryId: integer("country_id"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.projectId],
			foreignColumns: [projects.id],
			name: "updates_project_id_projects_id_fk"
		}),
	foreignKey({
			columns: [table.countryId],
			foreignColumns: [countries.id],
			name: "updates_country_id_countries_id_fk"
		}),
]);

export const participatingCountries = pgTable("participating_countries", {
	projectId: uuid("project_id").notNull(),
	countryId: integer("country_id").notNull(),
}, (table) => [
	index("pc_country_idx").using("btree", table.countryId.asc().nullsLast().op("int4_ops")),
	index("pc_project_idx").using("btree", table.projectId.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.projectId],
			foreignColumns: [projects.id],
			name: "participating_countries_project_id_projects_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.countryId],
			foreignColumns: [countries.id],
			name: "participating_countries_country_id_countries_id_fk"
		}).onDelete("cascade"),
	primaryKey({ columns: [table.projectId, table.countryId], name: "participating_countries_project_id_country_id_pk"}),
]);
