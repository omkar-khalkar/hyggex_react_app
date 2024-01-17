import React from 'react';
import { LuHome } from "react-icons/lu";

const Path = () => {
  return (
    <div className='flex flex-col ml-5 mt-5 mx-auto'>
      <div className='flex items-center space-x-2 h-[4vh] w-full'>
        <LuHome className='text-gray-500' />
        <div className='text-gray-500'> &gt; FlashCard</div>
        <div className='text-gray-500'> &gt; Mathematics</div>
        <div className='text-[#06286E]-500 font-medium'> &gt; Realation and Function</div>
      </div>
      <div className="mt-5 ml-5 sm:mt-8 sm:ml-8 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-transparent bg-clip-text w-full">
        <div className="text-2xl font-bold">
          Relations and Functions (Mathematics)
        </div>
      </div>
    </div>
  );
};

export default Path;
