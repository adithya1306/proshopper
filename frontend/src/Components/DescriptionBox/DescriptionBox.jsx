import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews(135)</div>    
      </div>
      <div className="descriptionbox-description">
        <p>Thoda description daal ne ka</p>
      </div>
    </div>
  )
}

export default DescriptionBox

