"use client";
import { redirect } from "next/navigation";
import { findUserByUsername } from "../AddPostButton/ServerFunctions";
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
          window.location.replace("/");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form action={handleLogin} className="flex flex-col sm:mr-4 ">
      <header className="flex flex-row justify-center">Log In</header>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="username"
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="password"
        />
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
          maxWidth: "150px", // Set a maximum width for larger screens (sm:w-auto)
          textAlign: "center",
          marginBottom: "2.5rem",
        }}
        >
        Log In
      </button>
        </div>
    </form>
  );
};

export default LogInForm;
