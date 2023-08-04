"use client";
import {
  findUserById,
  getPostsByUserId,
} from "@/components-with-logic/AddPostButton/ServerFunctions";
import { User, UserContext } from "@/contexts/UserContextProvider";
import Image from "next/image";
import { UserPost } from "@prisma/client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import LogoutButton from "@/components-with-logic/LogoutButton/LogoutButton";

const UserProfilePage = () => {
  const [user, setUser] = useState<User>();
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);
  const { currentUser } = useContext(UserContext);
  const userId = +useParams().userId;

  useEffect(() => {
    findUserById(userId).then((user) => setUser(user));

    getPostsByUserId(userId).then((posts) => setUserPosts(posts));
  }, [userId]);
  return (
    <div className="flex flex-col items-center">
      <div className="w-[70%] flex items-center mt-2 mb-4 justify-between">
        <div className="flex items-center">
          {user && (
            <>
              <Image
                className="rounded-full mr-2 outline outline-solid outline-black outline-1"
                src={`https://robohash.org/${user.id}?size=65x65&set=set2`}
                alt={`${user.username}'s avatar`}
                width={65}
                height={65}
              />
              <h2 className="font-bold">{user.username}</h2>
            </>
          )}
        </div>
        {currentUser && user?.id === currentUser?.id && (
          <div className="flex justify-end ">
            <LogoutButton />
          </div>
        )}
      </div>
      <div className="w-[62%] min-w-[340px] flex-col-reverse flex">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post.id}>
              <p className="border-b">{post.postText}</p>
              {post.base64PostImage && (
                <div className="flex justify-center">
                  <img
                    src={post.base64PostImage}
                    alt={post.base64PostImage}
                    className="object-contain w-full h-full max-md:w-[100%] max max-w-[468px] max-h-[585px]"
                  />
                </div>
              )}
              <div className="flex justify-end text-gray-500">
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
