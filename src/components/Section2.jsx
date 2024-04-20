import React from 'react';
import ProgramingImage from '../images/codingBackround.avif';
import { forwardRef } from 'react';

export default forwardRef(function Section2(props, ref) {
  const TextAboutMe = `Front-end developer, thriving and specializing in Java Script and React. Passionate for innovation and dedicated to continuous learning, my goal is to expand my skills and stay ahead of industry trends.  Approaching every project with creativity, attention to detail and a drive for excellence.My journey as front-end developer is fueled by the motivation of crafting meaningful user experiences. `;

  return (
    <div className='section2 pb-10 m-2' ref={ref}>
      <div className='flex-col md:grid md:grid-cols-2 m-auto place-items-center  md:w-[95vh] m-x-auto mt-20 rounded-lg shadow-2xl border-4'>
        <div className='m-6 font-bold'>
          <p className='text-2xl text-white border-b-4 w-fit m-auto'>ABOUT ME</p>
          <p className='pt-10 pb-10 text-white text-xl pr-4'>{TextAboutMe}</p>
        </div>
        <div className='md:m-2'>
          <img
            className='rounded-lg bg-center bg-contain  m-auto  '
            src={ProgramingImage}
            alt='programing imagee'
          />
        </div>
      </div>
    </div>
  );
});
