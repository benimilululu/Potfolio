import React from 'react';
import { forwardRef } from 'react';

import ProgramingImage from '../images/coding.jpeg';
import Restourant from '../images/ReastorantApp.png';

export default forwardRef(function Section3(props, ref) {
  const handleClick = () => {
    window.open('https://www.youtube.com/watch?v=cQR3nHvMDRE', '_blank');
  };

  return (
    <div
      className='pb-20 m-auto md:grid md:grid-cols-1 md:w-4/6  text-white font-bold'
      ref={ref}
    >
      <p className='w-full m-auto text-left text-3xl font-bold p-2'>
        PORTFOLIO
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 md:m-auto md:w-5/6 gap-4  border-2   rounded-lg shadow-xl items-center m-2'>
        <div className='m-4'>
          <p className='text-xl '>Restaurant System</p>
          <p className='pt-3 text-base'>
            Restaurant System for GTA 5 roleplay where you can get order and the
            orders are going in the kitchen where the chef is viewing and making
            the order. This if Full Stack based application with back-end MySQL.
          </p>
          <button
            className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={handleClick}
          >
            Click to watch it on YouTube
          </button>
        </div>
        <img
          className='rounded-lg size-full p-4'
          src={Restourant}
          alt='restourant app'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:m-auto md:mt-4 md:w-5/6 border-2    rounded-lg mt-4 shadow-xl items-center m-2'>
        <div className='m-4 '>
          <p className='text-xl '>Construction Company Website</p>
          <p className='pt-3 text-base'>
            Website made for Construction Company where you can see what they
            are offering also why you need to chose them and where are they
            based.
          </p>
          <button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            Click for more details
          </button>
        </div>
        <img
          className='rounded-lg size-40 m-auto mb-5'
          src={ProgramingImage}
          alt='programing'
        />
      </div>
    </div>
  );
});
