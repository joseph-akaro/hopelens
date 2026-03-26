CREATE TABLE "participating_countries" (
	"project_id" uuid NOT NULL,
	"country_id" integer NOT NULL,
	CONSTRAINT "participating_countries_project_id_country_id_pk" PRIMARY KEY("project_id","country_id")
);
--> statement-breakpoint
ALTER TABLE "participating_countries" ADD CONSTRAINT "participating_countries_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participating_countries" ADD CONSTRAINT "participating_countries_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "pc_project_idx" ON "participating_countries" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "pc_country_idx" ON "participating_countries" USING btree ("country_id");