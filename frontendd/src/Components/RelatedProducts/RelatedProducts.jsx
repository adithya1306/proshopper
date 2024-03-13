import React from "react";
import './RelatedProducts.css'
import data from '../Assets/data'
import Item from "../Items/Items";

const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>

      <div className="relatedproducts-item">
        {data.map((item) => {
          return <Item id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts