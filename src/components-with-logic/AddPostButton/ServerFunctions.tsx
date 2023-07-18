"use server"

import { User } from "@/contexts/UserContextProvider";
import { prisma } from "../../db";

type PostData = {
  postImageUrl: string;
  postText: string;
  user: User;
};

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
        },
        include: {
          user: true, 
        },
      });
      await prisma.posts.create({
        data: {
          postImageUrl,
          postText,
          userId: user.id
        }
      });
    }

    console.log("Post created successfully");
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
