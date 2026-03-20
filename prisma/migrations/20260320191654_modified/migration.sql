/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Champion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authUserId]` on the table `Champion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authUserId` to the `Champion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Champion_countryId_idx";

-- AlterTable
ALTER TABLE "Champion" DROP COLUMN "createdBy",
ADD COLUMN     "authUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Champion_authUserId_key" ON "Champion"("authUserId");
