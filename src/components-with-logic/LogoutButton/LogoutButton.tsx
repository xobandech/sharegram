import Image from "next/image";
import LogoutImg from "../../images/logout.png";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContextProvider";
const LogoutButton = () => {
  const { setCurrentUser } = useContext(UserContext);
  return (
      <button
        className="flex items-center"
        onClick={() => {
          setCurrentUser(null);
          localStorage.setItem("currentUserSharegramSh", "");
        }}
      >
        <p className="mr-2 max-sm:hidden">Log Out</p>
        <Image width={30} height={30} src={LogoutImg} alt="Logout"></Image>
      </button>
  );
};

export default LogoutButton;
