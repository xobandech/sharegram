"use client";
import { useEffect, useState } from "react";
import { getPosts } from "../ServerFunctions";
import { UserPost } from "@prisma/client";

export default function Home() {
  const [posts, setPosts] = useState<UserPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      await getPosts().then((posts) => {
        console.log(posts);
        
        setPosts(posts as UserPost[]);
      });
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post) => {
          if (!post.postImageUrl) return <h3 key={post.id}>{post.postText}</h3>;
          return (
            <div key={post.id} className="w-[200px]">
              <img src={post.postImageUrl} alt={post.postImageUrl} />
              <h3>{post.postText}</h3>
            </div>
          );
        })}
    </div>
  );
}
