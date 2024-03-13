import React from "react";
import './css/LoginSignup.css'

const LoginSignup = () => {
  return(
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <input type="text" placeholder="Your password" />
        </div>
        <button>Continue</button>
        
        <div className="loginsignup-agree">
          <input type="checkbox"/>
          <p>By continuing, I agree to all Terms and Conditions</p>
        </div>
        <p className="loginsignup-login">Already have an account? <span>   Login</span></p>
      </div>
    </div>
  )
}

export default LoginSignup