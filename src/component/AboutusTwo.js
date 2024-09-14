import '../App.css';
import React from 'react';
import aboutImage from '../assets/images/aboutImage.jpeg';
import scaner from '../assets/images/scaner.png';
import Crousel from '../component/Crousel';




const AboutUs = () => {
    return (
        <>
            <div className="about-container">
                <div className="left-column">
                    <img src={aboutImage} alt="About Us" className="card-img2" />
                </div>
                <div className="right-column">
                    <h1 className='services-h1-css'>Dowload The App</h1>
                    <h1 className='services-h1-css2'>We Make The Process Simple</h1>
                    <p className="aboutustwo-css">_______</p>
                    <p className='color-gray-css'>
                        We are a company dedicated to providing high-quality products and services to our customers. Our mission is to deliver excellence in everything we do, and our team is passionate about innovation and customer satisfaction.
                    </p>
                    <div className='services-h1-css3'>
                        <h1>1.Dowload</h1>
                        <h1>2.Sign up</h1>
                        <h1>3.Enjoy The Ride</h1>
                    </div>
                    <div className="button-row">
                        <button className="custom-button">ANDROID</button>
                        <img src={scaner} alt="About Us" className="card-img3" />
                        <button className="custom-button">IOS</button>
                        <img src={scaner} alt="About Us" className="card-img3" />
                    </div>
                </div>
            </div>
            <Crousel />
        </>

    );
};

export default AboutUs;
