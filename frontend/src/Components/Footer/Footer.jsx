import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import wa from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>ProShopper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Vendors</li>
        <li>About</li>
        <li>Careers</li>
      </ul>
      <div className="footer-social">
        <div className="footer-icons-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={wa} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer