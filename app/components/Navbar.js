import React from 'react';
import Link from "next/link";
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

export const Navbar = (props) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link href="/" className="hover:text-gray-300">RealEstate</Link>
        </div>
        <div className="flex space-x-4">
          {
            props.session
            ? 
            <>
             <Button asChild className="text-white hover:text-gray-300">
                <Link href='/property/create'>
                  {props.session.user.name}
                </Link>
             </Button>
            </>
            : 
            <>
            <Button onClick={(() => signIn('google'))} className="text-white hover:text-gray-300">Sign In</Button>
            </>
          }
        </div>
      </div>
    </nav>
  );
};
