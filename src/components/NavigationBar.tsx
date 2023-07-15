import Link from "next/link";
import AddPostButton from "../components-with-logic/AddPostButton/AddPostButton";
const NavigationBar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href="/">Sharegram</Link>
      </div>
      <div className="flex justify-around w-[15rem]">
      <Link href="/auth">Sign In</Link>
      <Link href="/auth">Log In</Link>

        <AddPostButton />
      </div>
    </div>
  );
};

export default NavigationBar;
