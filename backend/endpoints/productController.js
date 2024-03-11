const Product = require("../schema/model")

exports.addProduct = async (req,res,next) => {
  let products = await Product.find({});
  let id;

  if(products.length > 0){
    id = products.slice(-1)[0].id + 1;
  }else {
    id = 1;
  }

  const product = new Product({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price
  });

  const added = await product.save();

  res.status(200).json({
    message : "Product Added Successfully",
    added
  });
}

exports.removeProduct = async (req,res,next) => {
  const id = req.body.id;
  const del = await Product.findOneAndDelete({id});

  res.status(200).json({
    message: "Product Deleted",
    id : del.id,
    name : del.name
  });
}

exports.getAllProducts = async (req,res,next) => {
  let products = await Product.find({});
  console.log(products);

  res.status(200).send(products);
}