import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto md:px-4 px-1 py-4 flex justify-between items-center">
        <div className="flex items-center w-1/3 ml-8">
          <a href="/" className="font-bold text-sm md:text-xl text-center">
            Willamette University Intramurals 
          </a>
        </div>
        <div className="flex justify-evenly flex-3 ">
          <button className="md:px-4 md:py-2 text-white font-semibold rounded-full p-1">
            Sign In
          </button>
          <Link className='md:px-4 mx-2 md:py-2  text-white font-semibold rounded-full p-1 text-center' href="/evl" > All Events</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
