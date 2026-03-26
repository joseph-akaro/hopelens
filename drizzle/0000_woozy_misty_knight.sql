CREATE TYPE "public"."project_status" AS ENUM('draft', 'active', 'completed', 'overdue');--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('partner', 'champion', 'admin');--> statement-breakpoint
CREATE TABLE "countries" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "countries_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(256),
	"email" varchar NOT NULL,
	"phone" integer NOT NULL,
	"region_id" integer
);
--> statement-breakpoint
CREATE TABLE "participating_countries" (
	"project_id" uuid NOT NULL,
	"country_id" integer NOT NULL,
	CONSTRAINT "participating_countries_project_id_country_id_pk" PRIMARY KEY("project_id","country_id")
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image_url" varchar,
	"title" varchar NOT NULL,
	"short_description" text NOT NULL,
	"description" text NOT NULL,
	"status" "project_status" DEFAULT 'draft',
	"deadline" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "regions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "regions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(256) DEFAULT 'No Region'
);
--> statement-breakpoint
CREATE TABLE "updates" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "updates_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar NOT NULL,
	"body" text NOT NULL,
	"project_id" uuid,
	"country_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256),
	"email" varchar NOT NULL,
	"phone" integer NOT NULL,
	"role" "roles" DEFAULT 'partner',
	"country_id" integer
);
--> statement-breakpoint
ALTER TABLE "countries" ADD CONSTRAINT "countries_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participating_countries" ADD CONSTRAINT "participating_countries_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participating_countries" ADD CONSTRAINT "participating_countries_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "updates" ADD CONSTRAINT "updates_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "updates" ADD CONSTRAINT "updates_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "countries_email_idx" ON "countries" USING btree ("email");--> statement-breakpoint
CREATE INDEX "countries_region_idx" ON "countries" USING btree ("region_id");--> statement-breakpoint
CREATE INDEX "pc_project_idx" ON "participating_countries" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "pc_country_idx" ON "participating_countries" USING btree ("country_id");--> statement-breakpoint
CREATE INDEX "users_email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "users_country_idx" ON "users" USING btree ("country_id");