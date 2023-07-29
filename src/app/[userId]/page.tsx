"use client"
import { findUserById, getPostsByUserId } from "@/components-with-logic/AddPostButton/ServerFunctions"
import { User } from "@/contexts/UserContextProvider"
import { UserPost } from "@prisma/client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const UserProfilePage = () => {
  const [user, setUser] = useState<User>()
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);
  const userId = +useParams().userId

  useEffect(() => {
    findUserById(userId).then((user) => setUser(user));

    getPostsByUserId(userId).then((posts) => setUserPosts(posts));
  }, [userId]);

  return (
    <>
      <div>
        {user && (
          <>
            <h2>User ID: {user.id}</h2>
            <h2>Username: {user.username}</h2>
          </>
        )}

        <div>
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div key={post.id}>
                <h3>Post ID: {post.id}</h3>
                <p>Post Text: {post.postText}</p>
              </div>
            ))
          ) : (
            <p>No posts found for this user.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfilePage;
