"use client";
import SearchUserComponent from "@/components-with-logic/SearchUserComponent/SearchUserComponent";

const SearchPage = () => {
  return (
    <div className="flex justify-center mt-2">
      <div className="sm:hidden">
        <SearchUserComponent top={85} />
      </div>
      <h1 className="max-sm:hidden">
        This page is for mobile version of site.
      </h1>
    </div>
  );
};

export default SearchPage;
