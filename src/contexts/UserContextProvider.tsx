"use client"
import { findUserByUsername } from "@/components-with-logic/AddPostButton/ServerFunctions";
import React, { createContext, useEffect, useState } from "react";

export type User = {
    id: number;
    username: string;
} | null

export type Post = {
    id: number;
    imageUrl: string;
    textToShare: string;
    createdAt: Date;
    likes: number;
    comments: string;
}

interface UserContextType {
  currentUser: User | null; 
  setCurrentUser: (user: User) => void; 
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});
  
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const value: UserContextType = { currentUser, setCurrentUser };

  useEffect(() => {
    const userString = localStorage.getItem('currentUserSharegramSh');
    if (userString) {
      const user = JSON.parse(userString) as User;
      findUserByUsername(user?.username as string).then((user) => {
        if(user.username !== undefined && user.username !== null) setCurrentUser(user);
      })
    }
  }, []);
  
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};