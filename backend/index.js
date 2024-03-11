const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { Console } = require('console');
const Product = require("../backend/schema/model.js");
const { addProduct, removeProduct, getAllProducts } = require('./endpoints/productController.js');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use(cors());

// Database - MongoDB
mongoose.connect("mongodb+srv://adibala1306:AdiHari9@cluster0.11sxbkh.mongodb.net/proshopper", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });


// API 

app.get("/",(req,res) => {
  res.send("Express App is running");
})

// Image Storage using Multer

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req,file,cb) => {
    return cb(null,`${file.fieldname}_${Date.now()}_${file.originalname}`)
  }
});

const upload = multer({
  storage: storage
})

// API endpoint for uploading images
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res) => {
  res.json({
    message: "success",
    image: `http://localhost:${port}/images/${req.file.filename}`
  })
});

// Mounting the routes
app.use('/',productRoutes);

app.listen(port, (err) => {
  if(!err){
    console.log("Server running on "+port);
  }else{
    console.log("Error : ",err);
  }
})