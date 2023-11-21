const mongoose = require ('mongoose');
///define schema for collection////

const appointmentSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  service: String,
  mobile: Number,
  email: String,
  doctor:String,
  date: String,
  time: String,
  profile: String,
  
  
 
});

/// creating a modal///

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports= Appointment
