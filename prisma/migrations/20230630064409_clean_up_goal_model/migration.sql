/*
  Warnings:

  - You are about to drop the column `authorId` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Goal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "published",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;
