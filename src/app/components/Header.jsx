import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <>
    <header className="bg-green-200 text-black pr-4">
            <div className="flex justify-end">
              <Link href="/" passHref>
                <button className="p-2 font-bold text-black border-2 border-green-200 m-2 rounded-md hover:border-black">Home</button>
              </Link>
              <Link href="/login" passHref>
                <button className="p-2 font-bold text-black  border-2 border-green-200 m-2 rounded-md hover:border-black">Login</button>
              </Link>
              <Link href="/chat" passHref>
                <button className="p-2 font-bold text-black  border-2 m-2 border-green-200 rounded-md hover:border-black">Chat</button>
              </Link>  
              <Link href="/settings" passHref>
                <button className="p-2 font-bold text-black  border-2 m-2 border-green-200 rounded-md hover:border-black">Settings</button>
              </Link>  
            </div>
    </header>
    </>
  )
}

export default Header