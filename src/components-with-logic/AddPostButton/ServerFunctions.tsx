"use server";
import { prisma } from "../../db";
type PostData = {
  imageUrl: string;
  textToShare: string;
}
export const handleAddPost = async ({imageUrl, textToShare}: PostData) => {
  try {
    const user = {
      username: "Anonymous",
      id: 999999,
      posts: [],
    };

    await prisma.post.create({
      data: {
        // author: {
        //   connect: { id: user.id },
        // },
        imageUrl: imageUrl,
        textToShare: textToShare,
      },
    });

    console.log("Post created successfully");
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
