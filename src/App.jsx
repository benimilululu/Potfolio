import './App.css';
import Section3 from './components/Section3';
import Contact from './components/Contact';

import { Vortex } from './ui/vortex';

import { useRef } from 'react';
import Header from './components/Header';
import Section_1 from './components/Section_1';
import { HeroScrollDemo } from './components/ScrollDemo';



function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const contactRef = useRef();

  const HandleClick = () => {
    console.log(ref1);
    ref1.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const HandleClickPortfolio = () => {
    console.log(ref2);
    ref2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const HandleClickContact = () => {
    console.log(contactRef);
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='relative w-full h-screen'>
        <div className='fixed top-0 left-0 w-full h-full z-0'>
          <Vortex
            backgroundColor='black'
            particleCount={500}
            baseHue={120}
            className='w-full h-full' 
          />
        </div>

        <div className='relative z-10'>
          <Header
            AboutMeHandler={HandleClick}
            PortfolioHandler={HandleClickPortfolio}
            ContactHandler={HandleClickContact}
          />
          <Section_1 />
          <HeroScrollDemo />
          <Section3 ref={ref2} />
          <Contact ref={contactRef} />
        </div>
      </div>
    </>
  );
}

export default App;
