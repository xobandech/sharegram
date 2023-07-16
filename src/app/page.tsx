"use client"
import { useEffect, useState } from "react";
import { getPosts } from "../ServerFunctions";
import { Post } from "@prisma/client";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts() as Post[]
      setPosts(posts)
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post) => {
          if (!post.imageUrl) return <h3 key={post.id}>{post.textToShare}</h3>;
          return <div key={post.id} className="w-[200px]">
              <img src={post.imageUrl} alt={post.imageUrl} />
              <h3>
            {post.textToShare}
              </h3>
          </div>
        })}
    </div>
  );
  
}
