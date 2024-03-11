import React, { useState } from "react";
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    old_price: '',
    new_price: ''
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeProduct = (e) => {
    setProductDetails({...productDetails,[e.target.name] : e.target.value})
  }

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
  
    let formData = new FormData();
    formData.append('product', image); 
  
    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      responseData = await response.json();
      
      if (responseData.message === "success") {
        product.image = responseData.image;
        console.log(product);
        await fetch('http://localhost:4000/addProduct',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product),
        }).then((res) => res.json()).then((data) => {data.message === "Product Added Successfully" ? alert('Product Added') : alert("Product not added")})
      } else {
        console.error('Image upload failed:', responseData.error);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }


  return (
    <div className="add-product">
      <div className="addproduct-itemfields">
        <p>Product Name</p>
        <input value={productDetails.name} onChange={changeProduct} type="text" name="name" placeholder="Enter Product Name" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfields">
          <p>Original Price</p>
          <input value={productDetails.old_price} onChange={changeProduct} type="text" name="old_price" placeholder="Enter Original Price" />
        </div>
        <div className="addproduct-itemfields">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeProduct} type="text" name="new_price" placeholder="Enter Offer Price" />
        </div>
      </div>
      <div className="addproduct-itemfields">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeProduct} name="category" className="addproduct-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="addproduct-itemfields">
        <p>Upload Image</p>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-img' />
        </label>
        <input onChange={imageHandler} type="file" name="image" id='file-input' hidden />
      </div>
      <button onClick={() => {addProduct()}} className="addproduct-btn">Add</button>
    </div>
  )
}

export default AddProduct