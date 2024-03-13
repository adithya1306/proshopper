import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove from '../Assets/delete-button.svg';
import plus from '../Assets/plus.png';


const CartItems = () => {
  const { addToCart,getShippingFee,getTotalCartAmount,all_product,cartItems,removeFromCart } = useContext(ShopContext);

  return(
    <div className="cartitems">
      {/*<h1 className="cart"><span>Shopping</span> Cart</h1>*/}
      <div className="cartitems-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Add</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((i) => {
        if(cartItems[i.id] > 0){
          return <div>
            <div className="cartitems-format cartitems-main">
              <img src={i.image} alt="" className="carticon-product-icon"/>
              <p>{i.name}</p>
              <p>₹ {i.new_price}</p>
              <button className="cartitems-quantity">{cartItems[i.id]}</button>
              <p>₹ {i.new_price * cartItems[i.id]}</p>     
              <img src={plus} className="carticon-remove" alt="" onClick={() => addToCart(i.id)} />  
              <img src={remove} className="carticon-remove" onClick={() => {removeFromCart(i.id)}} alt="" />
            </div>
          </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Purchase Price</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Charges</p>
              <p>₹ {getShippingFee(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Discount</p>
              <p>₹ {0.02 * getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>₹ {getTotalCartAmount() + getShippingFee(getTotalCartAmount()) - (0.02 * getTotalCartAmount())}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a coupon, Enter it here</p>
          <div className="promo-box">
            <input type="text" className="promo-code" placeholder="Enter promo code"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems