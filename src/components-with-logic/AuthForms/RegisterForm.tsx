"use client"
import { redirect } from "next/navigation";
import { createUser, findUserByUsername } from "./LoginServerFunctions";
import { User, UserContext } from "@/contexts/UserContextProvider";
import { useContext } from "react";


const RegisterForm = () => {
  const { setCurrentUser } = useContext(UserContext)
  const handleRegistration = async (data: FormData) => {
  const password = data.get("password")?.valueOf().toString() as string;
  const confirmPassword = data.get("confirmPassword")?.valueOf() as string;
  const username = data.get("username")?.valueOf() as string;
  if (password === confirmPassword) {
    createUser({username, password})
    findUserByUsername(username).then((user) => {
      setCurrentUser(user)
    })
    console.log("Successfull registration");
    redirect("/");
  }
};
  return (
    <form className="flex" action={handleRegistration}>
      <header>Registration</header>
      <label htmlFor="username">Username</label>
      <input className="text-black" type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input className="text-black" type="text" name="password" />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input className="text-black" type="text" name="confirmPassword" />
      <button
        type="submit"
        className="outline outline-2 outline-black bg-[#443]"
      >
        Sign up
      </button>
    </form>
  );
};

export default RegisterForm