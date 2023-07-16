"use client";
import { redirect } from "next/navigation";
import { findUserByUsername } from "./LoginServerFunctions";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContextProvider";

const LogInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const handleLogin = async (data: FormData) => {
    const password = data.get("password")?.valueOf() as string;
    const username = data.get("username")?.valueOf() as string;

    try {
      findUserByUsername(username).then((user) => {
        if (user && password === user.password) {
          setCurrentUser(user);
          console.log(user);
          redirect("/");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form action={handleLogin} className="outline outline-1 outline-black">
      <header>Login</header>
      <label htmlFor="username">Username</label>
      <input className="text-black" type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input className="text-black" type="text" name="password" />
      <button
        type="submit"
        className="outline outline-2 outline-white bg-[#443]"
      >
        Log in
      </button>
    </form>
  );
};

export default LogInForm;
