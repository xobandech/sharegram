"use client"
import { useEffect, useState } from "react";
import { getPosts } from "../ServerFunctions";

export type Post = {
  textToShare: string;
  imageUrl: string;
  id: number;
  likes: number;
  createdAt: Date;
  comments: String;
}

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
          return <h3 key={post.id}>{post.textToShare}</h3>;
        })}
    </div>
  );
  
}
