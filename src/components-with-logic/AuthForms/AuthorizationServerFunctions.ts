"use server";
import { prisma } from './../../db';
import { User } from "@prisma/client";
import { UserData } from "../AddPostButton/ServerFunctions";

export async function createUser(data: UserData) {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });
  return user as User
}

export async function findUsersBySearchQuery(searchQuery: string) {
  return await prisma.user.findMany({
    where: {
      username: {
        startsWith: searchQuery,
        mode:"insensitive"        
      },
    },
  });
}

export async function getUsers() {
  "use server";
  return prisma.user.findMany({ select: {
    id: true,
    username: true,
  }});
}
