import Link from "next/link";
import AddPostButton from "../components-with-logic/AddPostButton/AddPostButton";
const NavigationBar = () => {
  return (
    <>
      <div className="flex bg-[#f1c9e1] text-[#03017D] justify-between h-10 flex-row items-center">
        <div>
          <Link className="pl-4" href="/">Sharegram</Link>
        </div>
        <div className="flex justify-around w-[15rem]">
          <Link href="/auth">Sign In</Link>
          <Link href="/auth">Log In</Link>
        </div>
      </div>
      <AddPostButton />
    </>
  );
};

export default NavigationBar;
