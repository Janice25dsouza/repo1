import React from 'react';
import Link from 'next/link';
import PetsIcon from '@mui/icons-material/Pets';


const Header = () => {
  return (
    <>
    <header className="bg-green-200 text-black pr-4">
      <div className="flex">
            <PetsIcon style={{ fontSize: 50, color: 'black' }}/>

            <div className="flex justify-end pl-10">
              <Link href="/" passHref>
                <button className="p-2 font-bold text-black border-2 border-green-200 m-2 rounded-md hover:border-black">Home</button>
              </Link>
              <Link href="/login" passHref>
                <button className="p-2 font-bold text-black  border-2 border-green-200 m-2 rounded-md hover:border-black">Login</button>
              </Link>
              <Link href="/cart" passHref>
                <button className="p-2 font-bold text-black  border-2 m-2 border-green-200 rounded-md hover:border-black">Cart</button>
              </Link> 
              <Link href="/shopping" passHref>
                <button className="p-2 font-bold text-black  border-2 m-2 border-green-200 rounded-md hover:border-black">Shop Now</button>
              </Link> 
              <Link href="/settings" passHref>
                <button className="p-2 font-bold text-black  border-2 m-2 border-green-200 rounded-md hover:border-black">Settings</button>
              </Link>  
            </div>
        </div>
    </header>
    </>
  )
}

export default Header