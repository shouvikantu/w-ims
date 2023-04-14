import Link from "next/link";
import React from "react";

const Header = ({user}) => {
  return (
    <header className="bg-transparent  text-white border-b-2">
      <div className="container mx-auto md:px-4 px-1 py-4 flex justify-between items-center">
        <div className="flex items-center w-1/3 ml-8">
          <a href="/" className="font-bold text-sm md:text-xl text-center">
            Willamette University Intramurals
          </a>
        </div>
        <div className="flex justify-evenly flex-3 ">
          {!user ? (
            <>
              <Link
              href="/login"
              className="md:px-4 mx-2 md:py-2  text-white font-semibold rounded-full p-1 text-center"
          >
            Staff Login
          </Link> {console.log(user)}
              <Link
                className="md:px-4 mx-2 md:py-2  text-white font-semibold rounded-full p-1 text-center"
                href="/"
              >
                {" "}
                All Events
              </Link>
            </>
          ) : (
            <>
            <Link
              className="md:px-4 mx-2 md:py-2  text-white font-semibold rounded-full p-1 text-center"
              href="/login"
            >
              {" "}
              Logout
            </Link>
             <Link
               className="md:px-4 mx-2 md:py-2  text-white font-semibold rounded-full p-1 text-center"
               href="/"
             >
               {" "}
               All Events
             </Link>
           </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
