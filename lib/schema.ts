import { relations } from "drizzle-orm";
import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

// Enums
export const rolesEnum = pgEnum("roles", ["Partner", "Champion", "Admin"]);
export const projectStatusEnum = pgEnum("project_status", [
  "Draft",
  "Active",
  "Completed",
  "Overdue",
  "Cancelled",
]);
// planning, data collection, analyzing and reporting, completed and shared, cancelled

export const projectStage = pgEnum("project_stage", [
  "Planning",
  "Data Collection",
  "Analysis & Reporting",
  "Shared"
]);

export  const countryStatus = pgEnum("country_status",[
  "Active",
  "Slow",
  "Ideal"
])

// Region
export const regions = table("regions", {
  id: t.integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: t.varchar("name", { length: 256 }).default("No Region"),
});

// Countries
export const countries = table(
  "countries",
  {
    id: t.integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: t.varchar("name", { length: 256 }),
    email: t.varchar("email").notNull(),
    phone: t.integer("phone").notNull(),
    status: countryStatus("status").default("Active").notNull(),
    regionId: t.integer("region_id").notNull().references(() => regions.id),
    lastactivity: t.timestamp("last_activity").defaultNow(),
  },
  (table) => [
    t.index("countries_email_idx").on(table.email),
  ]
);

// Users
export const users = table("users", {
  id: t.uuid("id").primaryKey(),
  name: t.varchar("name", { length: 256 }),
  email: t.varchar("email").notNull(),
  phone: t.integer("phone"),
  role: rolesEnum("role").default("Partner").notNull(),
  image: t.varchar("image", { length: 256 }),
  approved: t.boolean("approved").default(false).notNull(),
  lastActivity: t.timestamp("last_activity").defaultNow(),
  countryId: t.integer("country_id"),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
},
(table) => [
  t.uniqueIndex("users_email_unique").on(table.email),
]
);

// Projects
export const projects = table("projects", {
  id: t.uuid("id").defaultRandom().primaryKey(),
  imageUrl: t.varchar("image_url"),
  title: t.varchar("title").notNull(),
  shortDescription: t.text("short_description").notNull(),
  description: t.text("description").notNull(),
  status: projectStatusEnum("status").default("Draft"),
  stage: projectStage("project_stage").default("Planning"),
  deadline: t.timestamp("deadline").notNull(),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
  updatedAt: t.timestamp("updated_at").defaultNow(),
});

// Updates
export const updates = table("updates", {
  id: t.integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: t.varchar("title").notNull(),
  body: t.text("body").notNull(),
  deadline: t.integer("deadline").notNull(),
  projectId: t.uuid("project_id").references(() => projects.id),
  countryId: t.integer("country_id").references(() => countries.id),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
  updatedAt: t.timestamp("updated_at"),
});

// Many-to-many: Projects ↔ Countries
export const participatingCountries = table(
  "participating_countries",
  {
    projectId: t.uuid("project_id")
      .notNull()
      .references(() => projects.id, { onDelete: "cascade" }),

    countryId: t.integer("country_id")
      .notNull()
      .references(() => countries.id, { onDelete: "cascade" }),
  },
  (table) => [
    t.primaryKey({ columns: [table.projectId, table.countryId] }), // ✅ prevents duplicates
    t.index("pc_project_idx").on(table.projectId),
    t.index("pc_country_idx").on(table.countryId),
  ]
);

// Relations

// projects relations
export const projectsRelations = relations(projects, ({ many }) => ({
  participatingCountries: many(participatingCountries),
  updates: many(updates),
}));

// updates relations
export const updatesRelations = relations(updates, ({ one }) => ({
  project: one(projects, {
    fields: [updates.projectId],
    references: [projects.id],
  }),
  country: one(countries, {
    fields: [updates.countryId],
    references: [countries.id],
  }),
}));

// countries relations
export const countriesRelations = relations(countries, ({ one, many }) => ({
  region: one(regions, {
    fields: [countries.regionId],
    references: [regions.id],
  }),
  participatingCountries: many(participatingCountries),
  updates: many(updates),
  users: many(users),
}));

// User Country relation
export const usersRelations = relations(users, ({ one }) => ({
  country: one(countries, {
    fields: [users.countryId],
    references: [countries.id],
  }),
}))


export const regionRelations = relations(regions, ({ many }) => ({
  country: many(countries),
}))


// User types
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

// Project types
export type Project = InferSelectModel<typeof projects>;
export type NewProject = InferInsertModel<typeof projects>;

// Country types
export type Country = InferSelectModel<typeof countries>;

// Update types
export type Update = InferSelectModel<typeof updates>;