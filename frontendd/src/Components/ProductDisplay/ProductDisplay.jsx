import React, { useContext } from "react";
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import starDull from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={starDull} alt="" />
          <p>(135)</p>
        </div>
        <div className="productdisplay-prices">
          <div className="productdisplay-newprice">
            ${product.new_price}
          </div>
          <div className="productdisplay-oldprice">
            ${product.old_price}
          </div>
        </div>
        <div className="productdisplay-desc">
          Yahan thoda description daalne ka
        </div>
        <div className="productdisplay-size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDisplay