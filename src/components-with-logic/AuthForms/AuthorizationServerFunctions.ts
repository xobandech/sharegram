"use server";
import { PrismaClient, User } from "@prisma/client";
import { UserData } from "../AddPostButton/ServerFunctions";

export async function createUser(data: UserData) {
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });
  return user as User
}

export async function getUsers() {
  "use server";
  const prisma = new PrismaClient();
  return prisma.user.findMany();
}
