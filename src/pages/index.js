import React from 'react'
import BackgroundVideoComponent from '../component/BackgroundVideoComponent';
import Navbar from '../component/Navbar';
import OurServices from '../component/OurServices'
import AboutUs from '../component/AbooutUs'
import Testimonials from '../component/Testimonials'
import Footer from '../component/Footer'

const index = () => {
    return (
        <>
            <Navbar />
            <BackgroundVideoComponent />
            <OurServices />
            <AboutUs />
            <Testimonials />
            <Footer />
        </>
    )
}

export default index