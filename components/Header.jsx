import Link from "next/link";
import { User } from "./User";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between  p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google/">
          <p className="link">About</p>
        </Link>
        <Link href="https://store.google.com/">
          <p className="link">Store</p>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com/">
          <p className="link">Gmail</p>
        </Link>
        <a
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "google"}&searchType=image`
            )
          }
          className="link"
        >
          Images
        </a>
        <User />
      </div>
    </header>
  );
};
