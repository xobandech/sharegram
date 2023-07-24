"use server";
import { PrismaClient } from "@prisma/client";
import { UserData } from "../AddPostButton/ServerFunctions";

export async function createUser(data: UserData) {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
      posts: {
        connect: [],
      },
    },
  });
}

export async function getUsers() {
  "use server";
  const prisma = new PrismaClient();
  return prisma.user.findMany();
}
