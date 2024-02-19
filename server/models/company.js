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
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  isfarmerorcompany:[
    {
        isfarmer:{
            type:Boolean,
            default:false,
        },
        iscompany:{
            type:Boolean,
            default:true,
        }
    }
  ],
  email:{
    type:String,
    required:true,
  },
  contact:{
    type:String,
    required:true,
  }
});

// Creating model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
