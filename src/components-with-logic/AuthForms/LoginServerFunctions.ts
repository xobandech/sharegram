"use server";
import {  PrismaClient } from "@prisma/client";

type UserData = {
  password: string;
  username: string;
}

export async function findUserByUsername(username: string) {
  "use server"
  const prisma = new PrismaClient()
  return await prisma.user
      .findUnique({ where: { username: username } })
}

export async function createUser(data: UserData) {
  "use server"
  const prisma = new PrismaClient()
  await prisma.user.create({ data: { username: data.username, password: data.password } });
  
}

export async function getUsers() {
  "use server";
  const prisma = new PrismaClient()
  return prisma.user.findMany();
}
