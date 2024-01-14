/*
  Warnings:

  - You are about to drop the column `createdAt` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `incomes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `incomes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `incomes` table. All the data in the column will be lost.
  - You are about to drop the `nocomes` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `expenses` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `incomes` DROP COLUMN `color`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `title`,
    ADD COLUMN `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    ADD COLUMN `description` VARCHAR(255) NULL;

-- DropTable
DROP TABLE `nocomes`;
