"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png"
import AddPostButton from "../components-with-logic/AddPostButton/AddPostButton";
const NavigationBar = () => {
  return (
    <>
      <div className="flex border-b border-black justify-between h-14 flex-row items-center">
        <div>
          <Link className="pl-4 flex flex-row justify-center" href="/"><Image src={Logo} width={150} height={200} alt="dasds" /></Link>
        </div>
        <div className="flex justify-around w-[15rem]">
          <Link href="/auth">Sign In | Log In</Link>
        </div>
      </div>
      <AddPostButton />
    </>
  );
};

export default NavigationBar;
