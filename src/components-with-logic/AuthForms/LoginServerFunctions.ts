"use server";
import { User } from "@/contexts/UserContextProvider";
import { PrismaClient } from "@prisma/client";

type UserData = {
  password: string;
  username: string;
};

export async function findUserByUsername(username: string) {
  "use server";
  const prisma = new PrismaClient();
  return (await prisma.user.findUnique({
    where: { username: username },
  })) as User & UserData;
}

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

export async function addPostToUser(userId: number, postText: string, postImageUrl:string) {
  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        posts: {
          create: [{ postText, postImageUrl }]
        }
      },
      include: {
        posts: true
      }
    });
    return user;
  } catch (error) {
    console.error('Error adding post to user:', error);
    return null;
  }
}
export async function getUsers() {
  "use server";
  const prisma = new PrismaClient();
  return prisma.user.findMany();
}
