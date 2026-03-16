import React from 'react';
import { forwardRef } from 'react';

import { ContainerScroll } from '../ui/container-scroll-animation.tsx';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { techStack } from '../data/techStack';

import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';
import SectionShell from './SectionShell';

export default forwardRef(function HeroScrollDemo({ id }, ref) {
  const TextAboutMe = `Front-end developer, thriving and specializing in JavaScript and React. Passionate for innovation and dedicated to continuous learning, my goal is to expand my skills and stay ahead of industry trends. Approaching every project with creativity, attention to detail and a drive for excellence. My journey as a front-end developer is fueled by the motivation of crafting meaningful user experiences.`;

  const IconTooltip = ({ title, children }) => (
    <Tooltip
      title={title}
      slots={{
        transition: Zoom,
      }}
    >
      <Button sx={{ minWidth: 0, padding: 0, borderRadius: '1rem' }}>{children}</Button>
    </Tooltip>
  );

  return (
    <SectionShell
      id={id}
      ref={ref}
      className='mt-4 pb-8 md:-mt-12'
    >
      <div className='md:hidden'>
        <div className='glass overflow-hidden rounded-[28px] border border-white/10 px-4 py-5 shadow-glass'>
          <div className='mb-5 text-center'>
            <p className='mb-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent/80'>
              Modern Frontend Toolkit
            </p>
            <p className='mx-auto max-w-xs text-xs leading-6 text-white/58'>
              Interfaces, styling systems, typed frontend code, and realtime product tooling.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-x-2 gap-y-4'>
            {techStack.map((item) => {
              const Icon = item.icon;

              return (
                <IconTooltip key={item.name} title={item.name}>
                  <div className='group flex flex-col items-center gap-2'>
                    <span className='flex h-14 w-14 items-center justify-center rounded-2xl bg-transparent'>
                      <Icon className='h-10 w-10' />
                    </span>
                    <span className='text-center text-[10px] font-medium leading-4 tracking-wide text-white/62'>
                      {item.name}
                    </span>
                  </div>
                </IconTooltip>
              );
            })}
          </div>

          <div className='mt-6 rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-5 text-center'>
            <TextGenerateEffect
              duration={1}
              filter={false}
              className='text-xs uppercase tracking-[0.32em] text-accent/90'
              words='About Me'
            />
            <p className='mx-auto mt-3 max-w-xs text-xl font-semibold leading-tight tracking-tight text-white'>
              Building thoughtful front-end experiences with strong visuals and clean structure.
            </p>
            <p className='mx-auto mt-4 max-w-sm text-sm leading-7 text-white/72'>
              {TextAboutMe}
            </p>
          </div>
        </div>
      </div>

      <div className='hidden md:block'>
        <ContainerScroll titleComponent={<></>}>
          <div className='h-full'>
            <div className='relative h-full overflow-hidden rounded-2xl text-white'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_34%)]' />
              <div className='absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]' />

              <div className='relative flex h-full flex-col px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8'>
                <div className='mx-auto w-full max-w-4xl rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:px-6'>
                  <div className='mb-4 flex flex-col items-center text-center'>
                    <p className='mb-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-accent/80'>
                      Modern Frontend Toolkit
                    </p>
                    <p className='max-w-2xl text-sm text-white/55'>
                      Interfaces, styling systems, typed frontend code, and realtime product tooling.
                    </p>
                  </div>

                  <div className='grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-9 md:gap-4'>
                    {techStack.map((item) => {
                      const Icon = item.icon;

                      return (
                        <IconTooltip key={item.name} title={item.name}>
                          <div className='group flex flex-col items-center gap-2'>
                            <span className='flex h-16 w-16 items-center justify-center rounded-2xl bg-transparent transition duration-300 hover:bg-transparent hover:shadow-neon sm:h-[4.5rem] sm:w-[4.5rem] md:h-[5.25rem] md:w-[5.25rem]'>
                              <Icon className={item.className} />
                            </span>
                            <span className='text-[10px] font-medium tracking-wide text-white/52 transition group-hover:text-white/80'>
                              {item.name}
                            </span>
                          </div>
                        </IconTooltip>
                      );
                    })}
                  </div>
                </div>

                <div className='mt-5 flex flex-grow items-center justify-center'>
                  <div className='glass mx-auto flex w-full max-w-4xl flex-col rounded-[28px] border border-white/10 px-6 py-6 text-center shadow-glass md:px-10 md:py-8'>
                    <TextGenerateEffect
                      duration={1.4}
                      filter={false}
                      className='text-sm uppercase tracking-[0.34em] text-accent/90 md:text-base'
                      words='About Me'
                    />
                    <p className='mx-auto mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl'>
                      Building thoughtful front-end experiences with strong visuals, structure, and product focus.
                    </p>
                    <TextGenerateEffect
                      duration={1.1}
                      filter={false}
                      className='mx-auto max-w-3xl text-xs leading-7 text-white/72 md:text-base'
                      words={TextAboutMe}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </SectionShell>
  );
})
