import React, { Fragment } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export const User = ({ className }) => {
  const { data: session } = useSession();

  return (
    <Fragment>
      {session && (
        <img
          src={session.user.image}
          onClick={() => signOut()}
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
        />
      )}

      {!session && (
        <button
          onClick={signIn}
          className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        >
          Sign in
        </button>
      )}
    </Fragment>
  );
};
