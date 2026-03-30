import type { User } from "@/lib/schema";

export type UserDetail = User;


// DATABASE SCHEMA (for reference):
//   id: t.text("id").primaryKey(), //
//   name: t.varchar("name", { length: 256 }),
//   email: t.varchar("email").notNull(),
//   phone: t.integer("phone"),
//   role: rolesEnum("role").default("partner"),
//   image: t.varchar("image", { length: 256 }),
//   approved: t.boolean("approved").default(false),
//   lastActivity: t.timestamp("last_activity").defaultNow(),
//   countryId: t.integer("country_id").references(() => countries.id),
//   createdAt: t.timestamp("created_at").defaultNow().notNull(),