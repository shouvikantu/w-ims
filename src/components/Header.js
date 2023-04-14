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
        {!user && (
          <a
            href="/login"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Staff Login
          </a>
        )}

        {user && (
          <button
            onClick={() => auth.signOut()}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
