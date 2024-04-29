import React from 'react';
import profilePic from '../images/filip.jpeg';

export default function Section_1() {
  const smallTextAboutMe =
    'Hi. I am Martin Jovanovic. Passionate Front-end React Developer based in Skopje, North Macedonia. 📍';

  return (
    <div className='relative md:h-[55vh] cursor-default '>
      <div className='grid grid-cols-1 md:absolute  md:grid-cols-2 h-full  rounded-full items-center'>
        <div className='md:flex md:justify-end md:mr-10 mt-5 md:mt-0 w-4/6  h-full m-auto'>
          <img
            className='shape bg-transparent rounded-full object-cover  m-auto'
            src={profilePic}
            alt='profile pic'
          ></img>
        </div>
        <div className='md:flex md:justify-start text-4xl md:text-5xl pt-4 w-fit md:w-3/6 font-serif font-bold text-white mt-5 pb-10 md:mr-10'>
          <div>
            <p className=''>Front-End</p>
            <p className='whitespace-nowrap pt-4 static'>JavaScript / React</p>
            <p className='pt-4 static'>Developer</p>
            <p className='text-xl pt-10 static'>{smallTextAboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
