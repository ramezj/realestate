
import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <a href="/" className="hover:text-gray-300">RealEstate</a>
        </div>
        <div className="flex space-x-4">
          <Link href="/"className="text-white hover:text-gray-300">Sign In</Link>
          <Link href="/"className="text-white hover:text-gray-300">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
