import '../App.css';
import React from 'react';
import BlackBg from '../assets/images/BlackBg.jpeg';
import aboutImage from '../assets/images/aboutImage.jpeg';
import AboutusTwo from '../component/AboutusTwo'


const AboutUs = () => {
    return (
        <>
            <div className='main'>
                <img src={BlackBg} alt="Card 4" className="card-image" />
                {/* Applying bold text class to the entire container */}
                <div className="about-us-container">
                    <div className="video-text text-bold">
                        <h1>About Us</h1>
                        <p className="aboutus-page-css-color-red">Every Ride Counts</p>
                        <p className="margin-bottom">_______</p>
                        <h6>Experience luxury and comfort with our global chauffeured services. Travel in style with professional drivers across any city worldwide.</h6>
                        <button className="cta-button">Read More</button>
                    </div>
                </div>
            </div>
            <AboutusTwo />
        </>

    );
};

export default AboutUs;
