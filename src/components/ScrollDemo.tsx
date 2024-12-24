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

  const TextAboutMe = `Front-end developer, thriving and specializing in JavaScript and React. Passionate for innovation and dedicated to continuous learning, my goal is to expand my skills and stay ahead of industry trends. Approaching every project with creativity, attention to detail and a drive for excellence. My journey as a front-end developer is fueled by the motivation of crafting meaningful user experiences.`;

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
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll titleComponent={<></>}>
        <div className='h-full'>
          <div className='relative text-white'>
            <div className='absolute inset-2 h-full w-full transform scale-[20] rounded-full blur-3xl' />
            <div className='relative px-4 py-6 sm:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center'>
              <div className='flex flex-col items-center'>
                <h1 className='text-xl sm:text-3xl md:text-5xl font-bold text-center mb-4'>
                  Tech Stack
                </h1>
                <div className='grid grid-cols-5 sm:grid-cols-5 md:grid-cols-9 gap-4 md:gap-8'>
                  <IconTooltip title='HTML5'>
                    <TiHtml5 className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-orange-600' />
                  </IconTooltip>

                  <IconTooltip title='CSS3'>
                    <FaCss3Alt className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-sky-600' />
                  </IconTooltip>

                  <IconTooltip title='JavaScript'>
                    <SiJavascript className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 rounded-lg shadow-2xl text-yellow-300 ' />
                  </IconTooltip>

                  <IconTooltip title='React'>
                    <FaReact className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-sky-400' />
                  </IconTooltip>

                  <IconTooltip title='Next.js'>
                    <TbBrandNextjs className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-white' />
                  </IconTooltip>

                  <IconTooltip title='Tailwind CSS'>
                    <SiTailwindcss className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24' />
                  </IconTooltip>

                  <IconTooltip title='TypeScript'>
                    <SiTypescript className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-blue' />
                  </IconTooltip>

                  <IconTooltip title='MySQL'>
                    <SiMysql className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24' />
                  </IconTooltip>

                  <IconTooltip title='Firebase'>
                    <IoLogoFirebase className='w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 text-yellow-400' />
                  </IconTooltip>
                </div>
              </div>

              <div className='flex flex-grow justify-center items-center text-center w-full  sm:mt-2 md:mt-20'>
                <div className='text-white max-w-xs sm:max-w-2xl md:max-w-4xl px-4'>
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
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
