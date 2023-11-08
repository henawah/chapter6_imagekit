/*
  Warnings:

  - You are about to drop the column `deskripsi` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `judul` on the `users` table. All the data in the column will be lost.
  - Added the required column `desc` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "deskripsi",
DROP COLUMN "judul",
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
