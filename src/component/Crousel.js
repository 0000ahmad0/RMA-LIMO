import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BgAbout from '../assets/images/BgAbout.jpg'; 
import BgAbout2 from '../assets/images/BgAbout2.jpg'; 
import BgAbout3 from '../assets/images/BgAbout3.jpg'; 


const Crousel = () => {
  return (
    <Carousel 
      showThumbs={false} 
      infiniteLoop 
      useKeyboardArrows 
      autoPlay
      showArrows={true}
      showStatus={false}
    >
      <div>
        <img src={BgAbout} alt="Card 1" className="card-image" />
      </div>
      <div>
        <img src={BgAbout2} alt="Card 2" className="card-image" />
      </div>
      <div>
        <img src={BgAbout3} alt="Card 3" className="card-image" />
      </div>
    </Carousel>
  );
};

export default Crousel;
