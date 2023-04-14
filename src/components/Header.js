import { auth } from "../../firebase";
import Link from "next/link";
import React from "react";

const Header = ({ user }) => {
  return (
    <header className="bg-transparent  text-white border-b-2">
      <div className="container mx-auto md:px-4 px-1 py-4 flex justify-between items-center">
        <div className="flex items-center w-1/3 ml-8">
          <Link href="/" className="font-bold text-sm md:text-xl text-center">
            Willamette University Intramurals
          </Link>
        </div>
        <div>
        
        {!user && (
          <Link
            href="/login"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Staff Login
          </Link>
        )}

        {user && (
          <>
          <button
            onClick={() => auth.signOut()}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded mx-2"
          >
            Logout
          </button>
          <Link 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          href="/"> All Events</Link>
          </>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;
