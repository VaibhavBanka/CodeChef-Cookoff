const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantityAvailable: {
    type: Number,
    required: true
  },
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject', 
    required: true
  },
  harvestDate: {
    type: Date,
    required: true
  },
  expirationDate: {
    type: Date,
    required: true
  },
});

// Creating model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
