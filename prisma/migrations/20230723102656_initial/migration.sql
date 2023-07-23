/*
  Warnings:

  - Added the required column `authorUsername` to the `UserPost` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorUsername" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "postText" TEXT NOT NULL,
    "postImageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserPost" ("createdAt", "id", "postImageUrl", "postText", "userId") SELECT "createdAt", "id", "postImageUrl", "postText", "userId" FROM "UserPost";
DROP TABLE "UserPost";
ALTER TABLE "new_UserPost" RENAME TO "UserPost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
