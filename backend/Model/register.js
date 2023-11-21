const mongoose = require ('mongoose');
///define schema for collection////

const registerSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  mobile: Number,
  password: String,
  conpassword: String,
  address: {type:String},
  date: { type: Date, default: Date.now },
});

/// creating a modal///

const Register = mongoose.model('Registers', registerSchema);
module.exports= Register
