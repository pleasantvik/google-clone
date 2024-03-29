import Image from "next/image";
import React from "react";
import { PaginationButton } from "./PaginationButton";

export default function ImageResult({ results }) {
  return (
    <div className="mt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4 ">
        {results?.items?.map((result) => (
          <div className="" key={result.link}>
            <div className="group">
              <a href={`${result.image.contextLink}`}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="group-hover:shadow-xl w-full h-60 object-contain"
                />
              </a>
              <a
                className="group-hover:undeerline"
                href={result?.image.contextLink}
              >
                <h2 className="truncate text-xl ">{result?.title}</h2>
              </a>
              <a
                className="group-hover:underline"
                href={result?.image.contextLink}
              >
                <p className="text-gray-600 ">{result?.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButton />
      </div>
    </div>
  );
}
