import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Google | Clone</title>
        <meta name="description" content="This is a google clone application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form className="flex justify-center flex-col items-center mt-40">
        <Image
          alt=""
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          width="300"
          height="100"
          objectFit="cover"
        />
        <div className="flex w-full justify-center mt-5 mx-auto border border-green-200 max-w-[90%] hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full  items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8  sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>
    </>
  );
}
