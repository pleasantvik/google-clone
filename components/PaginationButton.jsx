import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export const PaginationButton = () => {
  const router = useRouter();
  const startIdx = +router.query.start || 1;
  return (
    <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 ">
      {startIdx > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIdx - 10}`}
        >
          <div className="cursor-pointer flex items-center flex-col hover:underline ">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIdx < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIdx + 10}`}
        >
          <div className="cursor-pointer flex items-center flex-col hover:underline ">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};
