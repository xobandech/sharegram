/*
  Warnings:

  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Posts";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserPosts";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AllPosts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "postText" TEXT NOT NULL,
    "postImageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
