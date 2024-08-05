import React from 'react';
import Buttonfhl from './Buttonfhl';
import Buttonfhr from './Buttonfhr';
import Image from "next/image";
import jacky from "/public/jacky.jpg";

const Boxx = () => {
  return (
    <div className="bg-purple-300 m-10 h-2/3 rounded-3xl flex">
      <div className="pt-44 w-6"><Buttonfhl /></div>

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