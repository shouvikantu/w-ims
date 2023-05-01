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
    <header className="bg-transparent  text-white border-b-2">
      <div className="container mx-auto md:px-4 px-1 py-4 flex justify-between items-center">
        <div className="flex items-center w-1/3 ml-8">
          <Link href="/" className="font-bold text-sm md:text-xl text-center">
            Willamette University Intramurals
          </Link>
        </div>
        <div>
         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={signOut}>
          Logout
         </button>
         
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={handleClick}
          >
       
            Registration Info
          </button>

          <Link
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
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


