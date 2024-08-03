import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className="bg-green-200 mt-96 p-5 text-black">
        <div className=" flex ">
            <div className="pl-20 pt-2 pb-2 text-sm font-bold w-4 m-2">
                <Link href="/" passHref>
                    <button>Home</button>
                </Link>
                <Link href="/login" passHref>
                    <button>Login</button>
                </Link>             
            </div>
            <div className="pl-20 pt-2 pb-2 text-sm font-bold w-4 m-2 ml-10">
                <Link href="/chat" passHref>
                    <button>Chat</button>
                </Link>
                <Link href="/settings" passHref>
                    <button>Settings</button>
                </Link>
            </div>   
            <div className="pl-20 pt-2 pb-2 text-sm font-bold w-40 m-2 ml-10">
                <Link href="about" passHref>
                    <button>About us</button>
                </Link>       
            </div>   
        </div>
        <div className="text-center text-xs">
            Copyright  Corporation 2024 All rights reserved
        </div>  
    </div>
    </>
    
  )
}

export default Footer