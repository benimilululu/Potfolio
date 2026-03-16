'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile || prefersReducedMotion ? [1, 1] : [1.02, 1];
  };

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile || prefersReducedMotion ? [0, 0] : [6, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile || prefersReducedMotion ? [0, 0] : [0, -28]
  );

  return (
    <div
      className='relative flex h-[64rem] items-center justify-center p-2 md:h-[70rem] md:p-14'
      ref={containerRef}
    >
      <div
        className='w-full relative'
        style={{
          perspective: '2000px',
        }}
      >
        {!isMobile && (
          <Header translate={translate} titleComponent={titleComponent} />
        )}
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className='div max-w-5xl mx-auto text-center'
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className='glass max-w-5xl -mt-24 mx-auto h-[32rem] w-full rounded-[32px] border border-white/10 p-2 shadow-glass md:h-[40rem] md:p-5'
    >
      <div className='h-full w-full overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] md:rounded-3xl'>
        {children}
      </div>
    </motion.div>
  );
};
