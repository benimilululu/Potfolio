
import './App.css';
import Section3 from './components/Section3';
import Contact from './components/Contact';

import { useRef } from 'react';
import BackgroundFX from './components/BackgroundFX';
import Header from './components/Header';
import Section_1 from './components/Section_1';
import HeroScrollDemo from './components/ScrollDemo';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const contactRef = useRef();
  const activeSection = useActiveSection(['about', 'portfolio', 'contact']);

  const HandleClick = () => {
    ref1.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const HandleClickPortfolio = () => {
    ref2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const HandleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='relative min-h-screen w-full'>
        <BackgroundFX />

        <div className='relative z-10 pt-24 md:pt-20'>
          <Header
            AboutMeHandler={HandleClick}
            PortfolioHandler={HandleClickPortfolio}
            ContactHandler={HandleClickContact}
            activeSection={activeSection}
          />
          <Section_1
            onPortfolioClick={HandleClickPortfolio}
            onContactClick={HandleClickContact}
          />
          <HeroScrollDemo ref={ref1} id='about' />
          <Section3 ref={ref2} id='portfolio' />
          <Contact ref={contactRef} id='contact' />
        </div>
      </div>
    </>
  );
}

export default App;
