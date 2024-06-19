import React from 'react'
import Hero from '../pages/hero'
import Section1 from '../pages/section1';
import Section2 from '../pages/section2';
import Section3 from '../pages/section3';
import { Section4 } from '../pages/section4';
import { Section5 } from '../pages/section5';
import Fixed from '../pages/fixed';
import Sidebanner from '../pages/sidebanner';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Home = () => {
  return (
    <div className="main_section">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <div className='fixed_btn'>
       <Fixed />
      </div> */}

      <div className='fixed_banner'>
      </div>
    </div>
  )
}

export default Home