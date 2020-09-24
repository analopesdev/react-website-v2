import React from 'react'
import HeroSection from '../HeroSection'
import {homeObjeOne} from './Data'
 
function Home() {
  return (
    <>
      <HeroSection {...homeObjeOne}/>
    </>
  );
}

export default Home
