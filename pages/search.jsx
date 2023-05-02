import { resObj } from "@/Response";
import ImageResult from "@/components/ImageResult";
import SearchHeader from "@/components/SearchHeader";
import SearchResult from "@/components/SearchResult";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Search = ({ results }) => {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} &mdash; Search Page </title>
      </Head>

      <SearchHeader />
      {router.query.searchType === "image" && <ImageResult results={results} />}
      {router.query.searchType !== "image" && (
        <SearchResult results={results} />
      )}
      <SearchResult results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const mockData = false;
  const startIdx = context.query.start || 1;

  const data = mockData
    ? resObj
    : await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CX}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIdx}`
      );
  return {
    props: { results: data.data },
  };
};
