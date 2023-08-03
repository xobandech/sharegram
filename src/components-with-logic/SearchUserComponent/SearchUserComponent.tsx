import { User } from "../../contexts/UserContextProvider";
import { ChangeEvent, useEffect, useState } from "react";
import { getUsers } from "../AuthForms/AuthorizationServerFunctions";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../../images/searchIcon.svg";
const inputStyling = {
  borderRadius: "0.375rem",
  border: "solid 1px #333",
  background: `url(${SearchIcon.src}) no-repeat`,
  backgroundPosition: "right 3px center",
  backgroundSize: "1rem",
};
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
      <div>
        <input
          style={inputStyling}
          type="text"
          onChange={onSearchChange}
          onBlur={() => {
            if (!element?.parentElement?.matches(":hover")) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          }}
          onFocus={() => setIsVisible(true)}
        />
      </div>
      <div
        style={{ backgroundColor: "#f6f6f6", position: "absolute", top: 39, minWidth:"220px" }}
        id="listcontainer"
      >
        {isVisible &&
          filteredUsers.map((user) => {
            return (
              <div key={user?.id} style={{
                boxSizing: "border-box",
                borderBottom: "1px solid #333",
              }}>
                <Link
                  className="flex  flex-row m-2"
                  href={`/${user?.id}`}
                  onClick={() => setIsVisible(false)}
                >
                  <Image
                    className="rounded-full"
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
    </div>
  );
};

export default SearchUserComponent;