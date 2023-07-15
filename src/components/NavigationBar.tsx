import Link from "next/link";
import AddPostButton from "../components-with-logic/AddPostButton/AddPostButton";
const NavigationBar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href="/">Sharegram</Link>
      </div>
      <div className="flex justify-around w-[15rem]">
        <div>
          <AddPostButton />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
