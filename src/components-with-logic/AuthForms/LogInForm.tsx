"use client"  
import { redirect } from "next/navigation";
import { findUserByUsername } from "./LoginServerFunctions";
const handleLogin = async (data: FormData) => {
  const password = data.get("password")?.valueOf() as string;
  const username = data.get("username")?.valueOf() as string;
  try {
    findUserByUsername(username)
      .then((user) => {
        if (password === user?.password) {
          console.log("Succesfull login");
          redirect('/')
        }
      });
  } catch (e) {
    console.log(e);
  }
};

const LogInForm = () => {

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
