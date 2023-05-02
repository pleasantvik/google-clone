import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { User } from "./User";
import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeader = () => {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          alt=""
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          width="120"
          height="40"
          onClick={() => router.push("/")}
          className="cursor-pointer object-cover"
        />

        <form
          className="flex border border-gray-200 rounded-full shadow-sm px-6 py-3 ml-10 mr-5 max-w-3xl items-center"
          onSubmit={search}
        >
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none "
          />
          <XIcon className="h-6 text-gray-50 cursor-pointer " />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex" />
          <SearchIcon className="h-6 hidden sm:inline-flex" />
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOption />
    </header>
  );
};

export default SearchHeader;
