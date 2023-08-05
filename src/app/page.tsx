"use client";
import { useContext, useEffect, useState } from "react";
import { getPosts } from "../ServerFunctions";
import { UserPost } from "@prisma/client";
import UserPostComponent from "@/components/UserPostComponent";
import { UpdaterContext } from "@/contexts/UpdaterContextProvider";
export default function Home() {
  const { updaterValue, setUpdaterValue } = useContext(UpdaterContext)
  const [posts, setPosts] = useState<UserPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      await getPosts().then((posts) => {
        setPosts(posts as UserPost[]);
      });
      setUpdaterValue(false)
    };

    fetchPosts();
  }, [updaterValue]);

  return (
    <div className="flex flex-col-reverse items-center">
      {posts &&
        posts.map((post) => {
          return <UserPostComponent key={post.id} {...post} />
        })}
    </div>
  );
}
