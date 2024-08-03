import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Button from './components/Button';


const Page = () => {
  return (
    <div className="bg-black w-screen h-screen p-0 pb-20 min-h-screen">

      
      <h1 className="text-9xl font-black line-through text-pink-200 tracking-wider flex justify-center p-10 rounded">
        <div className="text-blue-500 hover:text-green-200">J</div>
        <div className="text-green-200 hover:text-blue-500">A</div>
        <div className="text-blue-500 hover:text-green-200">N</div>
        <div className="text-green-200 hover:text-blue-500">I</div>
        <div className="text-blue-500 hover:text-green-200">C</div>
        <div className="text-green-200 hover:text-blue-500">E</div>
      </h1>

      <p className="mt-10 text-2xl text-white font-bold p-10 flex justify-center border-2 rounded-xl bg-black hover:bg-green-200 hover:text-black hover:border-black font-extralight hover:font-bold text-center m-10">Hello!!! I&apos;m Janice. I enjoy art and reading. Art serves as my creative outlet. I also enjoy trying out new dishes and conversing with people.
      </p>
      
      <div className="hover:bg-yellow-500 rounded-2xl m-10 mb-10">
          <div className="text-center mt-48 pb-0 mb-0 hover:text-black ">
              <LightbulbIcon style={{ fontSize: 48, color: 'white' }} />
          </div>  

          <p className="font-black text-black text-2xl p-10 pt-0 flex justify-center text-center">Feedback: The session was quite useful. The hands-on approach with coding exercises was helpful. The instructions were easy to understand and quite simple to follow.
          </p>
      </div>

      <div className="flex justify-center p-4"><Button /></div>

    </div>
  );
};
export default Page;
