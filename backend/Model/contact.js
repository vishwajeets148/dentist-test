const mongoose = require ('mongoose');
///define schema for collection////

const contactSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  subject:String,
  message: String,
  date: { type: Date, default: Date.now },
});

/// creating a modal///

const Contact = mongoose.model('Contact', contactSchema);
module.exports= Contact
