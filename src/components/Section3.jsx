import { forwardRef, useState } from 'react';

import Restourant from '../images/ReastorantApp.png';

import sellTradeOnePic from '../images/3232-1.png'

import { ShowingDiv } from '../functions/showingDiv';

export default forwardRef(function Section3(props, ref) {
  const restaurantAppText =
    'Restaurant System for GTA 5 roleplay where you can get order and the orders are going in the kitchen where the chef is viewing and making the order. This if Full Stack based application with back-end MySQL.';

  const topFindAppText = `Welcome to our app, where fashion meets convenience! With our user-friendly platform, you can effortlessly buy and sell a wide range of stylish clothing, shoes, and accessories. Whether you're looking to refresh your wardrobe or declutter your closet, our app offers a seamless experience for both buyers and sellers.`;
  const [isVisible, setIsVisible] = useState(false);

  ShowingDiv(ref, setIsVisible);

  const handleClick = () => {
    window.open('https://www.youtube.com/watch?v=cQR3nHvMDRE', '_blank');
  };

  const handleClickApp = () => {
    window.open('https://sell-trade-web-app-4324.vercel.app', '_blank');
  };

  const handleClickAppReactCode = () => {
    window.open('https://github.com/benimilululu/Sell-TradeWebApp', '_blank');
  };

  const handleClickAppTSCode = () => {
    window.open('https://github.com/benimilululu/tsBuySell', '_blank');
  };

  return (
    <div
      className={`section3 pb-20 m-auto md:grid md:grid-cols-1 md:w-5/6  text-white font-bold ${
        isVisible ? 'visible' : ''
      }`}
      ref={ref}
    >
      <p className='w-full m-auto text-left text-3xl font-bold p-2'>
        PORTFOLIO
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 md:m-auto md:w-5/6 gap-4  border-4   rounded-lg shadow-xl items-center m-2'>
        <div className='m-4'>
          <p className='text-3xl border-b-4 w-fit m-auto'>
            Buy / Sell / Chat - App
          </p>
          <p className='pt-6 text-2xl'>{topFindAppText}</p>
          <button
            className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={handleClickApp}
          >
            Click here to preview the website
          </button>

          <div>
            <button
              className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              onClick={handleClickAppReactCode}
            >
              Github React Code
            </button>
          </div>
          <div>
            <button
              className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              onClick={handleClickAppTSCode}
            >
              Github Refactored TypeScript Code
            </button>
          </div>

        </div>
        <div className='grid grid-cols-1'>
          <img
            className='size-contain p-4'
            src={sellTradeOnePic}
            alt='sell/trade app'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:m-auto md:w-5/6  md:mt-4 gap-4  border-4   rounded-lg shadow-xl items-center m-2'>
        <img
          className='rounded-lg size-contain p-4'
          src={Restourant}
          alt='restourant app'
        />
        <div className='m-4'>
          <p className='text-3xl border-b-4 w-fit m-auto'>Restaurant System</p>
          <p className='pt-3 text-2xl'>{restaurantAppText}</p>
          <button
            className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            onClick={handleClick}
          >
            Click to watch it on YouTube
          </button>
        </div>
      </div>
    </div>
  );
});
