const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  income:{
    type:Number,
    default:0,
    required: true,
  },
  name: { 
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
            default:true,
        },
        iscompany:{
            type:Boolean,
            default:false,
        }
    }
  ],
  address:{
    type:String,
  },
  age:{
    type:Number,
  },
  aadharnumber:{
    type:String,
    required: true,
    unique:true,
  },
  phonenumber:{
    type: String,
    required: true,
    unique : true
  },
  farmSize: {
    type: Number,
  },
  cropsGrown: {
    type: [String], 
    required: true,
  },
  availability: {
    type: String,
    enum: ["full-time", "part-time"], 
    required: true,
  },
  preferredContactMethod: {
    type: String,
    enum: ["phone", "email", "both"],
    required: true,
  },
});

// Creating model
const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
