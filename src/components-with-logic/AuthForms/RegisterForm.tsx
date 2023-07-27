"use client";
import { redirect } from "next/navigation";
import { createUser } from "./AuthorizationServerFunctions";
import { findUserByUsername } from "../AddPostButton/ServerFunctions";
import { UserContext } from "@/contexts/UserContextProvider";
import { useContext } from "react";

const RegisterForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const handleRegistration = async (data: FormData) => {
    const password = data.get("password")?.valueOf().toString() as string;
    const confirmPassword = data.get("confirmPassword")?.valueOf() as string;
    const username = data.get("username")?.valueOf() as string;
    if (password === confirmPassword) {
      createUser({ username, password });
      findUserByUsername(username).then((user) => {
        setCurrentUser(user);
      });
      console.log("Successfull registration");
      redirect("/");
    }
  };
  return (
    <form
      action={handleRegistration}
    >
      <header className="flex flex-row justify-center">Sign Up</header>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="username">Username</label>
        <input className="bg-gray-50 max-w-[220px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="username" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Password</label>
        <input className="bg-gray-50 max-w-[220px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="password" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="confirmPassword">Confirm Password</label>
        <input className="bg-gray-50 max-w-[220px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="confirmPassword" />
      </div>
      <div className="flex justify-center">

      <button
        type="submit"
        style={{
          backgroundColor: "#1D4ED8",
          color: "white",
          borderColor: "#1D4ED8",
          borderWidth: "2px",
          fontSize: "14px",
          borderRadius: "0.5rem",
          marginTop: "10px",
          fontWeight: "500",
          padding: "10px 20px",
          width: "100%",
          maxWidth: "150px", 
          textAlign: "center",
        }}
      >
        Sign up
      </button>
      </div>  
    </form>
  );
};

export default RegisterForm;
