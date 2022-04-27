import React from 'react';

function Card() {
  return (
    <div className="card">
      <img src="../images/hp.png" alt="" className="card--image" />
      <div className="card--stats">
        <img src="../images/comp.png" alt="" className="card--image" />
        <span>5.0</span>
        <span>(6)</span>
        <span>INA</span>
      </div>
      <p>Lorem ipsum, dolor sit amet t.</p>
      <p>Lorem ipsum, dolor .</p>
    </div>
  );
}

export default Card;
