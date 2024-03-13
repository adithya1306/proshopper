import React from "react";
import './Offers.css'
import '../Hero/Hero.css'
import exclusive from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="hero" id="hero-2">
    <div className="hero-left">
      <h2> Exclusive Offers </h2>
      <div>
        <div className="hero-hand-icon">
          <p>Only on</p>
        </div>
        <p>Limited Products</p>
        <p>For Limited Time</p>
      </div>
      <div className="hero-latest-btn">
        <div>Check it out!</div>
      </div>
    </div>

    <div className="hero-right" id="hero-right-2">
      <img src={exclusive} alt=""/>
    </div>
  </div>
  )
}

export default Offers