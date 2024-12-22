'use client';
import React from 'react';
import { ContainerScroll } from '../ui/container-scroll-animation.tsx';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import Image from 'next/image';

import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';

import { Meteors } from '../ui/meteors';

export function HeroScrollDemo() {
  const words = `Oxygen\ngets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

  const TextAboutMe = `Front-end developer, thriving and specializing in Java Script and React. Passionate for innovation and dedicated to continuous learning, my goal is to expand my skills and stay ahead of industry trends.  Approaching every project with creativity, attention to detail and a drive for excellence.My journey as front-end developer is fueled by the motivation of crafting meaningful user experiences. `;

  const IconTooltip = ({ title, children }) => (
    <Tooltip
      title={title}
      slots={{
        transition: Zoom,
      }}
    >
      <Button>{children}</Button>
    </Tooltip>
  );

  return (
    <div className='flex flex-col overflow-hidden '>
      <ContainerScroll titleComponent={<></>}>
        <div className='h-full'>
          <div className='  relative  text-white'>
            <div className='absolute inset-2 h-full w-full transform scale-[20] rounded-full blur-3xl' />
            <div className='relative    px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
              <div className='flex'>
                <h1 className='text-4xl font-bold text-center m-auto'>
                  Tech Stack
                </h1>
                <div className='grid grid-cols-3 md:grid-cols-9 gap-6 mr-8 mt-2 md:gap-0 md:mr-2'>
                  <IconTooltip title='HTML5'>
                    <TiHtml5 className='w-full h-full text-orange-600' />
                  </IconTooltip>

                  <IconTooltip title='CSS3'>
                    <FaCss3Alt className='w-16 h-16 text-sky-600' />
                  </IconTooltip>

                  <IconTooltip title='JavaScript'>
                    <SiJavascript className='w-16 h-16 rounded-lg shadow-2xl text-yellow-300 bg-black' />
                  </IconTooltip>

                  <IconTooltip title='React'>
                    <FaReact className='w-16 h-16 text-sky-400' />
                  </IconTooltip>

                  <IconTooltip title='Next.js'>
                    <TbBrandNextjs className='w-16 h-16 text-black' />
                  </IconTooltip>

                  <IconTooltip title='Tailwind CSS'>
                    <SiTailwindcss className='w-16 h-16' />
                  </IconTooltip>

                  <IconTooltip title='TypeScript'>
                    <SiTypescript className='w-16 h-16 text-blue' />
                  </IconTooltip>

                  <IconTooltip title='MySQL'>
                    <SiMysql className='w-full h-full' />
                  </IconTooltip>

                  <IconTooltip title='Firebase'>
                    <IoLogoFirebase className='w-full h-full text-yellow-400' />
                  </IconTooltip>
                </div>
              </div>

              <div className='flex flex-grow justify-center items-center text-center w-full mt-16'>
                <div className='text-white max-w-2xl px-4'>
                  <TextGenerateEffect
                    duration={2}
                    filter={false}
                    words='About Me'
                  />
                  <TextGenerateEffect
                    duration={2}
                    filter={false}
                    words={TextAboutMe}
                  />
                </div>
              </div>
            </div>

            {/* Meaty part - Meteor effect */}
            {/* <Meteors number={40} /> */}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
