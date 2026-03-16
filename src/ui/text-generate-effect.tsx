'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '../lib/utils';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const wordsArray = words.split(' ');

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      animate(
        'span',
        {
          opacity: 1,
          filter: 'none',
        },
        { duration: 0 }
      );
      return;
    }

    if (isInView) {
      animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration || 1,
          delay: stagger(0.035),
        }
      );
    }
  }, [animate, duration, filter, isInView, prefersReducedMotion]);

  return (
    <div className={cn('font-bold', className)} ref={containerRef}>
      <div className='mt-4'>
        <div className='leading-snug tracking-wide text-white'>
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className='text-white opacity-0'
                style={{
                  filter: filter ? 'blur(10px)' : 'none',
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
