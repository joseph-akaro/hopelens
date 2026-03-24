import { ta } from "date-fns/locale";
import { relations } from "drizzle-orm";
import { pgEnum, pgTable as table} from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["partner", "champion", "admin"]);
export const projectEnum = pgEnum("status", ["draft", "active", "completed", "overdue",]);

export const users = table(
  "users",
  {
    id: t.uuid("id").defaultRandom().primaryKey(),
    name: t.varchar("name", { length: 256 }),
    email: t.varchar("email").notNull(),
    phone: t.integer("phone").notNull(),
    role: rolesEnum("role").default("partner"),
    countryId: t.integer("country_id").references(() => countries.id),
  },
  (table) => [
    t.uniqueIndex("email_idx").on(table.email),
    t.uniqueIndex("user_idx").on(table.id),
    t.index("country_idx").on(table.countryId)
  ]
);


export const countries = table(
  "country",
  {
    id: t.integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: t.varchar("name", { length: 256}),
    email: t.varchar("email").notNull(),
    phone: t.integer("phone").notNull(),
    regionId: t.integer('region_id').references(() => region.id),
  },
  (table) => [
    t.uniqueIndex("email_idx").on(table.email)
  ]
)

export const region = table(
  "region",
  {
    id: t.integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: t.varchar("region", { length: 256}).default("No Region"),
  }
)

export const update = table(
  "updates",
  {
    id: t.integer("id").primaryKey().generatedAlwaysAsIdentity(),
    title: t.varchar("title").notNull(),
    body: t.text("body").notNull(),
    projectId: t.integer("project_id").references(() => project.id),
    countryId: t.integer("country_id").references(() => countries.id),
    createdAt: t.timestamp("created_at").defaultNow().notNull(),
    updateAt: t.timestamp("updated_at")
  }
)

export const project = table(
  "project",
  {
    id: t.uuid("id").defaultRandom().primaryKey(),
    imageUrl: t.varchar("image_url"),
    title: t.varchar("title").notNull(),
    shortDescription: t.text("short_decription").notNull(),
    description: t.text("decription").notNull(),
    status: projectEnum("status").default('draft'),
    deadline: t.date("deadline").notNull(),
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t.timestamp()
  }
)

export const participatingCountries = table(
  "participating_countries",
  {
    projectId: t.integer("project_id")
      .notNull()
      .references(() => project.id, { onDelete: "cascade" }),

    countryId: t.integer("country_id")
      .notNull()
      .references(() => countries.id, { onDelete: "cascade" }),
  },
  (table) => [
    t.index("project_idx").on(table.projectId),
    t.index("country_idx").on(table.countryId)
  ]
);

export const projectsRelations = relations (project, ({ many }) => ({
  participatingCountries: many(participatingCountries),
}));

export const countriesRelations = relations(countries, ({ many }) => ({
  participatingCountries: many(participatingCountries),
}));

export const participatingCountriesRelations = relations(participatingCountries, ({ one }) => ({
  project: one(project, {
    fields: [participatingCountries.projectId],
    references: [project.id],
  }),
  country: one(countries, {
    fields: [participatingCountries.countryId],
    references: [countries.id],
  }),
}));