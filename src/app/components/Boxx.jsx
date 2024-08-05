import React from 'react';
import Buttonfhl from './Buttonfhl';
import Buttonfhr from './Buttonfhr';
import Shopnowbutton from './Shopnowbutton';
import Image from "next/image";
import jacky from "/public/jacky.jpg";
import Link from 'next/link';



const Boxx = () => {
  return (
    <div className="bg-purple-300 m-10 h-2/3 rounded-3xl flex">
      <div className="pt-44 w-6"><Buttonfhl /></div>

      

      <div className="pl-0 ml-0">
          <div className="text-4xl text-black font-bold italic m-10 mb-0 pt-10 ml-4 pl-4 pb-0  flex justify-center">Find the best products for your pets now!!!!!</div>

          <div className="font-black text-red-900 text-6xl ml-20 mt-4 pt-0 mb-0 pb-0">DISCOUNTS & MORE</div>

          <Link href='/shopping' passRef><Shopnowbutton /></Link>
            
      </div>
      
      <div className="flex justify-center">
        <Image
          src={jacky}
          alt="code"
          width={100}
          height={100}
          className="w-96 h-96"
        />
      </div>

      
      
      <div className="pt-44 w-6"><Buttonfhr /></div>

    </div>
  )
}

export default Boxx