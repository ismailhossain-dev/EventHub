/*
  Warnings:

  - You are about to drop the column `resortId` on the `rooms` table. All the data in the column will be lost.
  - The `amenities` column on the `rooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `number` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "rooms_resortId_idx";

-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "resortId",
ADD COLUMN     "number" INTEGER NOT NULL,
DROP COLUMN "amenities",
ADD COLUMN     "amenities" TEXT[];

-- CreateIndex
CREATE INDEX "rooms_category_idx" ON "rooms"("category");
