'use client';
import { useEffect, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '../lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [isInView, setIsInView] = useState(false);

  let wordsArray = words.split(' ');

  // Set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger the animation when the section is in view
        }
      },
      { threshold: 0.5 } // Adjust the threshold if needed
    );

    // Observe the component's container element
    const sectionElement = document.getElementById('textGenerateEffect');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // Start the animation once the component is in view
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className='dark:text-white text-white opacity-0'
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)} id='textGenerateEffect'>
      <div className='mt-4'>
        <div className=' dark:text-white text-black text-sm  md:text-2xl leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
