import React from 'react';
import imagepro from '../assets/images/imagepro.jpg'; // Make sure this path is correct
import '../App.css';

const Cards = () => {
  return (
    <div className="card-container">
      {/* Row 1 */}
      <div className="card">
        <img src={imagepro} alt="Card 1" className="card-image" />
   
      </div>
      <div className="card">
        <img src={imagepro} alt="Card 2" className="card-image" />
 
      </div>
      <div className="card">
        <img src={imagepro} alt="Card 3" className="card-image" />
        
      </div>
      
      {/* Row 2 */}
      <div className="card">
        <img src={imagepro} alt="Card 4" className="card-image" />

      </div>
      <div className="card">
        <img src={imagepro} alt="Card 5" className="card-image" />
 
      </div>
      <div className="card">
        <img src={imagepro} alt="Card 6" className="card-image" />
      </div>
    </div>
  );
};

export default Cards;
