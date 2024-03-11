import React, { useState, useEffect } from "react";
import './ListProduct.css';
import remove from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/allProducts", {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProducts();
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

    const removeProduct = async(id) => {
      await fetch('http://localhost:4000/removeProduct',{
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:id})
      })
      
      setAllProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    }  

  return (
    <div className="list-products">
      <h1>Product List</h1>
      <div className="list-products-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-products-allproducts">
        <hr/>
        {allProducts.map((allProducts,index) => {
          return <div key={index} className="list-products-main list-product-format">
            <img src={allProducts.image} className="list-img"></img>
            <p>{allProducts.name}</p>
            <p>{allProducts.old_price}</p>
            <p>{allProducts.new_price}</p>
            <p>{allProducts.category}</p>
            <img onClick={() => {removeProduct(allProducts.id)}} src={remove} alt="" className="remove-icon"/>
          </div>
        })}
      </div>
    </div>
  );
};

export default ListProduct;
