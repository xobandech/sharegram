"use client"
import React, { createContext, useState } from "react";

export type User = {
    id: number;
    username: string;
    posts?: Post[]
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
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};