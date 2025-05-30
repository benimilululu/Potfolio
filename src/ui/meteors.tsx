import React from 'react';
import { cn } from '../lib/utils';

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: Math.floor(Math.random() * 100) + '%', // Randomize across full height
            left: Math.floor(Math.random() * 150) - 50 + '%', // Extend beyond div width
            animationDelay: Math.random() * 0.8 + 's',
            animationDuration: Math.floor(Math.random() * 5 + 3) + 's',
          }}
        ></span>
      ))}
    </>
  );
};
