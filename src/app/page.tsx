"use client";
import { useEffect, useState } from "react";
import { getPosts } from "../ServerFunctions";
import { UserPost } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
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
    <div className="flex flex-col items-center">
      {posts &&
        posts.map((post) => {
          if (!post.postImageUrl)
            return (
              <div
                key={post.id}
                className="flex w-[468px] max-sm:w-[100%] flex-col border-b"
              >
                <Link
                  className="flex flex-row w-[100%] items-left m-2"
                  href={`/${post.userId}`}
                >
                  <Image
                    className="rounded-2xl"
                    src={`https://robohash.org/${post.userId}?size=40x40&set=set2`}
                    alt={`${post.authorUsername}'s avatar`}
                    width={40}
                    height={40}
                  />
                  <p className="p-2">{post.authorUsername}</p>
                </Link>
                <h3>{post.postText}</h3>
              </div>
            );

          return (
            <div
              key={post.id}
              className="flex w-[468px] max-sm:w-[100%] flex-col border-b"
            >
              <Link
                className="flex flex-row w-[100%] items-left m-2"
                href={`/${post.userId}`}
              >
                <Image
                  className="rounded-2xl"
                  src={`https://robohash.org/${post.userId}?size=40x40&set=set2`}
                  alt={`${post.authorUsername}'s avatar`}
                  width={40}
                  height={40}
                />
                <p className="p-2">{post.authorUsername}</p>
              </Link>
              <div className="max-w-[468px] max-sm:max-w-[100%] bg-gray-50 overflow-hidden">
                <img
                  src={post.postImageUrl}
                  alt={post.postImageUrl}
                  className="object-contain w-full h-full max-sm:w-[100%] max max-w-[468px] max-h-[585px]"
                />
              </div>
              <h3 className="text-xl">{post.postText}</h3>
            </div>
          );
        })}
    </div>
  );
}
