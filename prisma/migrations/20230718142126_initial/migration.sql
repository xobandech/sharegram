-- CreateTable
CREATE TABLE "Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "_UserPosts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_UserPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Posts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPost" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserPosts_AB_unique" ON "_UserPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPosts_B_index" ON "_UserPosts"("B");
