import { Header } from "@/components/Header";
import React, { Fragment } from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function Signin({ providers }) {
  console.log(providers);
  return (
    <Fragment>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              priority
              // src="/googl.webp"
              src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
              height={144}
              width={144}
              alt="Google Logo"
              className="w-52 object-cover"
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purpose
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

// To get info from server
export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
