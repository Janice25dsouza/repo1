import React from 'react';
import Header from '../components/Header';

function page() {
  return (
    <div>
        <Header />
        <h1 className="text-yellow-500 text-3xl font-black p-20 pb-0 mb-4 hover:text-5xl">SETTINGS</h1>
        <p className="p-20 pt-0 text-pink-300 text-3xl  hover:text-white">This page would allow you to change the settings on your account</p>
    </div>
  )
}

export default page