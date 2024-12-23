'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

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
    return isMobile ? [1, 1] : [1.05, 1];
  };

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [20, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, -100]
  );

  return (
    <div
      className='h-[60rem] md:h-[65rem] flex items-center justify-center relative p-2 md:p-20'
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
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 10px 10px #00000042, 0 24px 20px #00000026, 0 49px 20px #0000000a, 0 33px 25px #00000003',
      }}
      className='max-w-5xl -mt-40 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 backdrop-blur-md rounded-[30px] shadow-2xl '
    >
      <div className='h-full w-full overflow-hidden rounded-2xl md:rounded-3xl'>
        {children}
      </div>
    </motion.div>
  );
};
