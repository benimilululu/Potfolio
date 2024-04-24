import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useMediaQuery } from 'react-responsive';

export default function Header(props) {


    const isSmallScreen = useMediaQuery({ maxWidth: 767 });


  const classNamesForNavBar =
    'cursor-pointer text-2xl relative font-bold text-white md:after:bg-white md:after:absolute md:after:h-1 md:after:w-0 md:after:bottom-0 md:after:left-0 md:hover:after:w-full md:after:transition-all md:after:duration-300 md:font-bold md:text-white';

  const notifySuccess = () =>
    toast('Hi There.', {
      icon: '👏',
    });

  return (
    <div className=' h-full'>
      <Toaster position='top-right' reverseOrder={false} />
      <header className='p-4 relative left-1/2 transform -translate-x-1/2 w-11/12  md:flow-root transition-all duration-300 ease-in-out'>
        <div className='md:float-left'>
          <p
            className='cursor-pointer text-3xl md:text-2xl md:mt-4 font-bold text-white'
            onClick={notifySuccess}
          >
            Martin.dev
          </p>
        </div>
        <div className=' md:float-right md:flex md:space-x-4 grid grid-cols-3 mt-4'>
          <p className={classNamesForNavBar} onClick={props.AboutMeHandler}>
            About me
          </p>
          <p className={classNamesForNavBar} onClick={props.PortfolioHandler}>
            Portfolio
          </p>
          <p className={classNamesForNavBar} onClick={props.ContactHandler}>
            Contact
          </p>
        </div>
      </header>
    </div>
  );
}
