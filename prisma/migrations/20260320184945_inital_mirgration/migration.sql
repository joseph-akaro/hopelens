-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('draft', 'active', 'completed');

-- CreateEnum
CREATE TYPE "UpdateStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "ChampionRole" AS ENUM ('partner', 'champion', 'admin');

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "lastUpdateDate" TIMESTAMP(3),

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Champion" (
    "id" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "countryId" TEXT NOT NULL,
    "role" "ChampionRole" NOT NULL DEFAULT 'champion',
    "lastActivityDate" TIMESTAMP(3),

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "shortDescription" TEXT,
    "imageUrl" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'draft',
    "author" TEXT,
    "countries" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Update" (
    "id" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "projectId" TEXT,
    "projectTitle" TEXT,
    "countryId" TEXT,
    "countryName" TEXT,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "status" "UpdateStatus" NOT NULL DEFAULT 'pending',
    "author" TEXT,
    "attachments" TEXT[],

    CONSTRAINT "Update_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Country_region_idx" ON "Country"("region");

-- CreateIndex
CREATE UNIQUE INDEX "Champion_email_key" ON "Champion"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Champion_countryId_key" ON "Champion"("countryId");

-- CreateIndex
CREATE INDEX "Champion_countryId_idx" ON "Champion"("countryId");

-- CreateIndex
CREATE INDEX "Project_status_idx" ON "Project"("status");

-- CreateIndex
CREATE INDEX "Update_createdDate_idx" ON "Update"("createdDate" DESC);

-- AddForeignKey
ALTER TABLE "Champion" ADD CONSTRAINT "Champion_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
