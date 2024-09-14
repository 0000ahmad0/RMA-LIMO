import '../App.css';
import React from 'react';
import ServicesCard from './ServicesCard'

const OurServices = () => {
  return (
    <>
    <h1 className='services-h1-css'>Our Services</h1>
   <h3 className='services-h3-css'>No matter the occasion, RMA Worldwide has got you covered!</h3>
   <ServicesCard />
    </>
  );
};

export default OurServices;
