import '../App.css';
import React from 'react';
import BgVideo from '../assets/images/BgVideo.mp4';

const BackgroundVideoComponent = () => {
  return (
    <>
      <div className='main'>
        <video className='background-video' src={BgVideo} autoPlay loop muted />
        {/* Applying bold text class to the entire container */}
        <div className='video-text text-bold'>
          <h1>Worldwide</h1>
          <h1>Chauffeured</h1>
          <h1>Transportation</h1>
          <p className='margin-bottom'>_______</p>
          <h6>Experience luxury and comfort with our global chauffeured services. Travel in style with professional drivers across any city worldwide.</h6>
          <button className='cta-button'>Make a resevation</button>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideoComponent;
