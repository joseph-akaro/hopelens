CREATE TYPE "public"."roles" AS ENUM('partner', 'champion', 'admin');--> statement-breakpoint
CREATE TABLE "country" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "country_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(256),
	"region_idx" integer
);
--> statement-breakpoint
CREATE TABLE "region" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "region_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"region" varchar(256) DEFAULT 'No Region'
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(256),
	"email" varchar NOT NULL,
	"role" "roles" DEFAULT 'partner'
);
--> statement-breakpoint
ALTER TABLE "country" ADD CONSTRAINT "country_region_idx_region_id_fk" FOREIGN KEY ("region_idx") REFERENCES "public"."region"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX "user_idx" ON "users" USING btree ("id");