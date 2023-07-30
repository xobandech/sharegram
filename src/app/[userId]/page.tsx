"use client";
import {
  findUserById,
  getPostsByUserId,
} from "@/components-with-logic/AddPostButton/ServerFunctions";
import { User } from "@/contexts/UserContextProvider";
import Image from "next/image";
import { UserPost } from "@prisma/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfilePage = () => {
  const [user, setUser] = useState<User>();
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);
  const userId = +useParams().userId;

  useEffect(() => {
    findUserById(userId).then((user) => setUser(user));

    getPostsByUserId(userId).then((posts) => setUserPosts(posts));
  }, [userId]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[70%] flex items-center mt-2">
        {user && (
          <>
          <Image
                    className="rounded-2xl mr-2 outline outline-solid outline-black outline-1"
                    src={`https://robohash.org/${user.id}?size=65x65&set=set2`}
                    alt={`${user.username}'s avatar`}
                    width={65}
                    height={65}
                  />
            <h2>{user.username}</h2>
          </>
        )}
      </div>
      <div className="w-1/2">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post.id}>
              <p></p>
              <p className="border-b">{post.postText}</p>
              <div className="flex justify-end">
                <h3>{`${post.createdAt.toString().slice(3, 21)}`}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
