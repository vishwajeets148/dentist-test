const mongoose = require ('mongoose');
///define schema for collection////

const homeappointSchema = new mongoose.Schema({
  service: String, // String is shorthand for {type: String}
  email: String,
  doctor: String,
  name:String,
  time:String,
  date: String,
  date: { type: Date, default: Date.now },
});

/// creating a modal///

const Homeappoint = mongoose.model('Homeappoint', homeappointSchema);
module.exports= Homeappoint
