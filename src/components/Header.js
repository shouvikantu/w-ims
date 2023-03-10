import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-between">
          <a href="/" className="font-bold text-sm md:text-xl">
            Intramurals - Willamette University
          </a>
        </div>
        <div className="items-center">
          <button className="md:px-4 md:py-2 bg-white text-gray-900 font-semibold rounded-full p-2">
            Sign In
          </button>
          <Link className='md:px-4 md:py-2 bg-white text-gray-900 font-semibold rounded-full p-2' href="/evl" > All Events</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
