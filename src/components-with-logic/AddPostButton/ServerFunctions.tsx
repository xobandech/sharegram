"use server"
import { User } from "@/contexts/UserContextProvider";
import { PrismaClient, UserPost } from "@prisma/client";
const prisma = new PrismaClient()

export type UserData = {
  password: string;
  username: string;
};

type PostData = {
  postImageUrl: string;
  postText: string;
  user: User;
};

export async function findUserById(id:number) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  } catch (error) {
    console.error('Error finding user by ID:', error);
    throw error;
  }
}

export async function getPostsByUserId(userId: number): Promise<UserPost[]> {
  try {
    return await prisma.userPost.findMany({
      where: {
        userId: userId,
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function findUserByUsername(username: string) {
  "use server";
  return (await prisma.user.findUnique({
    where: { username: username },
  })) as User & UserData;
}

export async function createPost(
  postImageUrl: string,
  postText: string,
  user: User
) {

  try {
    if (user) {
       await prisma.userPost.create({
        data: {
          postImageUrl,
          postText,
          user: {
            connect: { id: user.id },
          },
          authorUsername: user.username
        },
        include: {
          user: true, 
        },
      });
    }

    console.log("Post created successfully");
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
