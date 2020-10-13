const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  price: Number,
  creator: String,
  image: {
    type: String,
    default: "http://dummyimage.com/187x149.jpg/dddddd/000000",
  },
  stock: Number,
  ref: String,
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
