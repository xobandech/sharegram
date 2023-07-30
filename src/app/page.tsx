"use client";
import { useEffect, useState } from "react";
import { getPosts } from "../ServerFunctions";
import { UserPost } from "@prisma/client";
import UserPostComponent from "@/components/Post";
export default function Home() {
  const [posts, setPosts] = useState<UserPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      await getPosts().then((posts) => {
        setPosts(posts as UserPost[]);
      });
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col-reverse items-center">
      {posts &&
        posts.map((post) => {
          return <UserPostComponent {...post} />
        })}
    </div>
  );
}
