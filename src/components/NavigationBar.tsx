"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png"
import { UserContext } from "@/contexts/UserContextProvider";
import AddPostButton from "../components-with-logic/AddPostButton/AddPostButton";
import { useContext } from "react";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <nav className="sticky z-20 top-0 justify-between [&>.link]:max-xl:hidden w-[100%] p-0 [&>*]:my-auto h-[2.8rem] flex flex-row bg-white border-b">
        <div>
          <Link className="flex pl-4 flex-row justify-center" href="/"><Image src={Logo} width={150} height={200} alt="dasds" /></Link>
        </div>
        <div className="text-black pr-5">
          {currentUser ? <AddPostButton /> : <Link href="/auth">Sign In | Log In</Link>}          
        </div>
      </nav>
  );
};

export default NavigationBar;
