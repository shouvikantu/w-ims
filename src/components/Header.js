import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Header = ({user}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/edata");
  };

  
  return (
    <header className="bg-transparent text-white border-b-2">
  <div className="container mx-auto md:px-4 px-1 py-4 flex flex-wrap md:flex-no-wrap justify-between items-center">
    <div className="flex items-center w-full md:w-1/3 md:ml-8">
      <Link href="/" className="font-bold text-md md:text-xl text-center">
        Willamette University Intramurals
      </Link>
    </div>
    <div className="md:flex md:justify-end mt-4 ">
      <button
        className="bg-red-500 hover:bg-red-700 text-black font-bold py-1 ml-1 px-2 md:py-2 md:px-4 rounded mr-2"
        onClick={signOut}
      >
        Logout
      </button>

      <button
        className="bg-green-500 text-black font-bold py-1 px-2 md:py-2 md:px-4 rounded mr-2"
        onClick={handleClick}
      >
        Registration Info
      </button>

      <Link
        className="bg-blue-600 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded"
        href="/events"
      >
        All Events
      </Link>
    </div>
  </div>
</header>

  );
};

export default Header;


