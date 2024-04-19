import { useState } from 'react'
import './App.css'
import TechStack from './components/TechStack'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Contact from './components/Contact'

import { useRef } from 'react';
import Header from './components/Header'
import Section_1 from './components/Section_1'

function App() {
   const ref1 = useRef();
   const ref2 = useRef();
   const contactRef = useRef();

   const HandleClick = () => {
     console.log(ref1);
     ref1.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      <div className=' bg-gradient-to-r from-cyan-700 to-indigo-800 '>
        <Header
          AboutMeHandler={HandleClick}
          PortfolioHandler={HandleClickPortfolio}
          ContactHandler={HandleClickContact}
        />
        <Section_1 />
        <TechStack />
        <Section2 ref={ref1} />
        <Section3 ref={ref2} />
        <Contact ref={contactRef} />
      </div>
    </>
  );
}

export default App
