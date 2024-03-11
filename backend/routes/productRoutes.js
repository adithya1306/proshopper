const express = require('express');
const { getAllProducts, addProduct, removeProduct } = require('../endpoints/productController');
const router = express.Router();

router
  .route('/allProducts')
  .get(getAllProducts);

router
  .route('/addProduct')
  .post(addProduct);

router 
  .route('removeProduct')
  .post(removeProduct);

module.exports = router;