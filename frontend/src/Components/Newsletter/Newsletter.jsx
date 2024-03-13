import React from "react";
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Offers to your Mail!</h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder="Your mail ID"/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter