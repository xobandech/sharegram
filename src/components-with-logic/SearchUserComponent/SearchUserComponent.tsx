import { User } from "../../contexts/UserContextProvider";
import { ChangeEvent, useEffect, useState } from "react";
import { getUsers } from "../AuthForms/AuthorizationServerFunctions";
import Link from "next/link";
import Image from "next/image";

const SearchUserComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [availableUsers, setAvailableUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getUsers().then((users) => setAvailableUsers(users));
  }, []);

  useEffect(() => {
    const filteredUsers = availableUsers.filter((user) => {
      return user?.username
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase());
    });
    setFilteredUsers(filteredUsers);
  }, [searchQuery, availableUsers]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchQuery(searchFieldString);
  };
  const element = document.getElementById("listcontainer");

  return (
    <div className="flex justify-center flex-col">
      <input
        type="text"
        onChange={onSearchChange}
        onBlur={() => {
          if (!element.parentNode.matches(":hover")) {
            setIsVisible(false)
          }
          else {
            setIsVisible(true)
          }
        }}
        onFocus={() => setIsVisible(true)}
      />
      <div
        style={{ backgroundColor: "#f4f4f4" }}
        className="bg-[#333]"
        id="listcontainer"
      >
        {isVisible &&
          filteredUsers.map((user) => {
            return (
              <div key={user?.id}>
                <Link
                  className="flex flex-row w-[100%] items-left m-2"
                  href={`/${user?.id}`}
                  onClick={() => setIsVisible(false)}
                >
                  <Image
                    className="rounded-2xl"
                    src={`https://robohash.org/${user?.id}?size=40x40&set=set2`}
                    alt={`${user?.username}'s avatar`}
                    width={40}
                    height={40}
                  />
                  <p className="p-2">{user?.username}</p>
                </Link>
              </div>
            );
          })}
      </div>
      <label htmlFor="dasd"></label>
    </div>
  );
};

export default SearchUserComponent;
