const mongoose = require ('mongoose');
///define schema for collection////

const registerFormSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  mobile: Number,
  subject:String,
  message:String,
  password: String,
  conpassword: String,
  address: String,
  date: { type: Date, default: Date.now },
});

/// creating a modal///

const RegisterForm = mongoose.model('RegisterForm', registerFormSchema);
module.exports= RegisterForm
