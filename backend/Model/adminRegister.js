const mongoose = require ('mongoose');
///define schema for collection////

const adminregSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password:String,
  conpassword: String,

});

/// creating a modal///

const Adminregistration = mongoose.model('Appointmentregister', adminregSchema);
module.exports= Adminregistration
