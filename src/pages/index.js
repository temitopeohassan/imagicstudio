import React from 'react';
import Slider from '../components/Homepage/Slider';
import Services from '../components/Homepage/Services';
import About from '../components/Homepage/About';
import Contact from '../components/Homepage/Contact';
import { aboutSection } from '../components/Homepage/About/data'

function Home() {
     



  return (

     
    <>
    
    <Slider />
    <Services />
    <About{...aboutSection} />
    <Contact />
 
    </>
  );
}

export default Home;