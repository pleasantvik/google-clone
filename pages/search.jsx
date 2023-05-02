import { resObj } from "@/Response";
import SearchHeader from "@/components/SearchHeader";
import axios from "axios";
import Head from "next/head";
import React from "react";

const Search = ({ results }) => {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* search Header */}
      <SearchHeader />
      {/* Result  */}
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const mockData = true;

  const data = mockData
    ? resObj
    : await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CX}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      );
  return {
    props: { results: data },
  };
};
