import '../App.css';
import React from 'react';
import BgAbout3 from '../assets/images/BgAbout3.jpg';




const Footer = () => {
    return (
        <>
        <div className='footer-underscore-css'>
         <h2>____________________________________________________________________________</h2>  </div>
         <div className="footer-container" style={{ backgroundImage: `url(${BgAbout3})` }}>
            <div className="footer-column">
                <h2>S E R V I N G</h2>
                <h2 className='testimonials-separator2'>___________________</h2>
                <h2>EVERY CITY</h2>
                <h2 className='testimonials-separator2'>____________________</h2>
                <h2>EVERYWHERE</h2>
                <button className='cta-button2'>Make a resevation  </button>
                <div className=''>
                <span className='footer-number-css'>888-888-LIMO</span>
                <span className='footer-number-css'>301-654-RIDE</span>
                    </div>        
                <p className='footer-lsttext-css'>Privacy Policy | Terms & Conditions</p>
            </div>
            <div className="footer-column2">
            <div className="login-container">
        <div className="form-box">
            <h1>Login</h1>
            <form>
                <div className="input-box">
                    <input type="text" id="name" name="name" required />
                    <label for="name">First Name</label>
                </div>
                <div className="input-box">
                    <input type="text" id="lastname" name="lastname" required />
                    <label for="lastname">Last Name</label>
                </div>
                <div className="input-box">
                    <input type="email" id="email" name="email" required />
                    <label for="email">Email</label>
                </div>
                <div className="input-box">
                    <input type="tel" id="phone" name="phone" required />
                    <label for="phone">Phone</label>
                </div>
                <h2 className='testimonials-separator2'>____________________</h2>
                <button className='cta-button3'>Send</button>
            </form>
        </div>
    </div>
            </div>
        </div>
        </>

    );
};

export default Footer;
