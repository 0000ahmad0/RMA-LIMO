// Testimonials.jsx
import '../App.css';
import React from 'react';
import ServicesCard from './ServicesCard';

const Testimonials = () => {
  return (
    <>
      <h1 className='testimonials-title'>Testimonials</h1>
      <h2 className='testimonials-separator'>____________________________________________________________________________</h2>
      <div className="testimonials-container">
        {/* Testimonial Card 1 */}
        <div className="testimonial-card">
          <h4 className="testimonial-text">"RMA does it again!!! 5-Stars once again!! Our chauffeur, Darius was the epitome of professionalism!!! This is our second 5-Star experience with RMA. On both occasions, the service was simply OUTSTANDING!!"</h4>
        <p className='testimonials-separator2'>_________________________________________</p>
         </div>
        {/* Testimonial Card 2 */}
        <div className="testimonial-card">
          <h4 className="testimonial-text">"RMA went above and beyond when providing transportation to and from a corporate event. They were easy to communicate with and very responsive, the bus arrived on time without any issues, the 30-person bus itself was immaculate and included every amenity you could wish for, and the bus chauffeur and attendant were amazing. I have never had a corporate event run so smoothly, and RMA played a huge part in that. All of our guests were very impressed by the VIP level of service. I highly recommend RMA to any corporate or private group looking for professional, world-class transportation service."</h4>
          <p className='testimonials-separator2'>_________________________________________</p>
         </div>
        {/* Testimonial Card 3 */}
        <div className="testimonial-card">
          <h4 className="testimonial-text">"We used RMA for our getaway car at our wedding. Our chauffeur arrived on time and was very professional and friendly, and the car was clean and comfortable. We were exhausted and appreciated that the chauffeur let us have some peace and quiet after our big event. A great experience with RMA!"</h4>
          <p className='testimonials-separator2'>_________________________________________</p>
            </div>
      </div>
    </>
  );
};

export default Testimonials;
