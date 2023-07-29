"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png";
import { UserContext } from "@/contexts/UserContextProvider";
import AddPostButton from "../components-with-logic/AddPostButton/AddPostButton";
import { useContext } from "react";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <nav className="sticky z-20 top-0 justify-between [&>.link]:max-xl:hidden w-[100%] p-0 [&>*]:my-auto h-[3.2rem] flex flex-row bg-white border-b">
      <div>
        <Link className="flex pl-4 flex-row justify-center" href="/">
          <Image src={Logo} width={150} height={200} alt="dasds" />
        </Link>
      </div>
      <div className="text-black pr-5">
        {currentUser ? (
          <div className="flex flex-row justify-between items-center">
            <AddPostButton />
            <div className="flex items-center pl-4">
              <p className="mr-2">{currentUser.username}</p>
              <Link href={`/${currentUser.id}`}>
                <Image
                  className="rounded-2xl"
                  src={`https://robohash.org/${currentUser.id}?size=32x32&set=set2`}
                  alt={`${currentUser.username}'s avatar`}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        ) : (
          <Link href="/auth">Sign In | Log In</Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
