require('dotenv').config()
const express =require ("express")
const bcrypt = require('bcrypt');

const path = require('path');
const saltRounds = 10;
const app=express()
const PORT = process.env.PORT || 8000
var cors = require('cors')
const multer  = require('multer')
var jwt = require('jsonwebtoken');
var jwtkey= "dentist"
app.use(express.static("public/uploads"))


const nodemailer = require('nodemailer');

app.use(cors())
app.use(express.json());

/// Serving the frontend

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "./frontend/build/index.html"),
      function (err) {
        res.status(500).send(err);
      }
    );
  });


// connection file import ////
require("./db/connection.js")

/// connecting register model///
const Register =require ("./Model/register.js")

/// connecting registerForm model///
const RegisterForm=require ("./Model/registerForm.js")


/////Appointment /////
const Appointment= require("./Model/appointment.js")

/////Contact /////
const Contact= require("./Model/contact.js")

//// Home Appointment //
 const Homeappoint = require ("./Model/homeappointment.js")


 /// Admin Registration

const  Adminregistration = require ("./Model/adminRegister.js")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
      
    //   cb(null, Date.now() + '-' + Math.round(Math.random() *999 + '-' + file.originalname))
       cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


app.post("/register", async(req, res)=>{
    const{name,email,mobile,password,conpassword,address}= req.body
       const preUser= await Register.findOne({email})
        console.log(preUser)
        if(!preUser){
            if(password===conpassword){
                const hashPass = await bcrypt.hash(password,saltRounds);
                const hashConPass= await bcrypt.hash(conpassword,saltRounds);
                const registerData= await new Register({name,email,mobile,password:hashPass,conpassword:hashConPass,address}) 
            const result= await registerData.save();
            res.send({status:200, message:"Registration successfully!!!", insertedData:result})
            }
           else{
            res.send({message:"Your password and conpassword not match !!!"})
           }
        }
        else{
            res.send({message:"Already register with this email id in our database"})
        }
})

/// Fetch Data
 app.get("/fetch", async(req,res)=>{
    const result= await RegisterForm.find();

    res.send({status:200, fetchData:result})
    // if(result.length>0){
    //     res.send({status:200, fetchData:result})

    // }
    // else{
    //     res.send({"status":400, "fetchData":"No data in DB"}) 
    // }
   
 })


// Delete API Data//

app.delete("/delete/:id", async(req,res)=>{
   console.log(req.params)

    const result= await RegisterForm.deleteOne({_id:req.params.id});
    res.send({"status":400, "fetchData":"Deleted"}) 
   
 })

  // / Get detail of particular users//

app.get("/singleUser/:id", async(req,res)=>{
    console.log(req.params)
 
     const result= await RegisterForm.findById({_id:req.params.id});
     
         res.send({"fetchData":result}) 
    
  })

// / Update Data////

app.put("/update/:id", async(req,res)=>{
    const{name,email,mobile,password,conpassword,address}= req.body
    const hashPass = await bcrypt.hash(password,saltRounds);
    const hashConPass= await bcrypt.hash(conpassword,saltRounds);
     const result= await RegisterForm.updateOne({_id:req.params.id}, 
        {$set:{name,email,mobile,password:hashPass,conpassword:hashConPass,address}
        });
         res.send({message:"Update Successfully", result}) 
 })


// login API ///

app.post("/login", async(req,res)=>{
    const{email,password} = req.body
        if(email && password){
            const userEmail= await Register.findOne({email})
           // console.log(userEmail)
           if(userEmail!==null){
            const passMatch= await bcrypt.compare(password, userEmail.password)
            if(userEmail.email==email && passMatch){
                res.send({message: "Login Sucessfully"}) 
            }
            else{
                res.send({message: "Your email and password not match"}) 
            }
            
           }
           else{
            res.send({message: "You are not register user"}) 
           }
        }
        else{
            res.send({message:"All field are Require"}) 
        }

})


/// Registration Form /////////////////

app.post("/registerform", async(req, res)=>{
    const{name,email,mobile,subject,message, password,conpassword,address}= req.body
       const preUser= await RegisterForm.findOne({email})
       // console.log(preUser)
        if(!preUser){
            if(password===conpassword){
                const hashPass = await bcrypt.hash(password,saltRounds);
                const hashConPass= await bcrypt.hash(conpassword,saltRounds);
                const registerData= await new RegisterForm({name,email,mobile,subject, message, password:hashPass,conpassword:hashConPass,address}) 
            const result= await registerData.save();
            res.send({status:200, message:"Registration successfully!!!", insertedData:result})
            }
           else{
            res.send({message:"Your password and conpassword not match !!!"})
           }
        }
        else{
            res.send({message:"Already register with this email id in our database"})
        }
})


///// Appointment ////////////


app.post("/appointment", upload.single('profile'), async(req, res)=>{
    const{service, name, email,doctor, mobile, date,time}= req.body
       const preUser= await Appointment.findOne({email})
       // console.log(preUser)
        if(!preUser){
            const photo= typeof req.file != 'undefined' ? req.file.filename : null;
            const registerData=await new Appointment({service, name, email,doctor, mobile, date,time,profile:photo}) 
            const result= await registerData.save();
            res.send({status:200, message:"Registration successfully!!!", insertedData:result})
            }
          
        
        else{
            res.send({message:"Already register with this email id in our database"})
        }
})



/// Contact ////

app.post("/contact", async(req, res)=>{
    const{name, email,subject,message}= req.body
       const preUser= await Contact.findOne({email})
       // console.log(preUser)
        if(!preUser){
            
            const contactData=await new Contact({name, email,subject,message}) 
            const result= await contactData.save();
            res.send({status:200, message:"Registration successfully!!!", insertedData:result})
            }
          
        
        else{
            res.send({message:"Already register with this email id in our database"})
        }

        var transporter= nodemailer.createTransport({
            service: "gmail",
            auth: {
               user : "vishwajeets148@gmail.com",
               pass : "hlqucxmyidyosjbv"
            }
      });
      var mailoptions ={
          from :"vishwajeets142@gmail.com",
          to :["shakti271@gmail.com", "vishwajeets142@gmail.com","vishwajeets553@gmail.com"],
          subject: "Send Email using Node.js",
          html: `<p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>`,
      }
      transporter.sendMail(mailoptions,(error)=>{
         error? console.log(error) : console.log("Mail send check your mail on update section")
      })


})

/// Contact Fetch ///

app.get("/contactfetch", async (req,res)=>{
   const result = await Contact.find()
   res.send({message:result})

})

// Contact Delete ///

app.delete("/contactdelete/:id", async (req,res)=>{
    const result = await Contact.deleteOne({_id:req.params.id})
    res.send({message:result})
 
 })


//// Home appointment //


app.post("/homeappointment", async(req, res)=>{
    const{name,email,doctor,service,date,time}= req.body
       const preUser= await Homeappoint.findOne({email})
        console.log(preUser)
        if(!preUser){
                const registerData= await new Homeappoint({name,email,doctor,service,date,time}) 
            const result= await registerData.save();
            res.send({status:200, message:"Registration successfully!!!", insertedData:result})
            }
         
        else{
            res.send({message:"Already register with this email id in our database"})
        }
})

/// Home Appointment Fetch ///

app.get("/homeappointmentfetch" , async(req,res)=>{
  const result = await Homeappoint.find()
  res.send({message:result})

})

/// Home Appointment Delete ///


app.delete("/homeappointmentdelete/:id", async (req,res)=>{
    const result = await Homeappoint.deleteOne({_id:req.params.id})
    res.send({message:result})
})







/// ADMIN REGISTER ///

app.post("/adminregister", async(req, res)=>{
    const{name,email,password,conpassword}= req.body
       const preUser= await Adminregistration.findOne({email})
        console.log(preUser)
        if(!preUser){
            if(password===conpassword){
                const hashPass = await bcrypt.hash(password,saltRounds);
                const hashConPass= await bcrypt.hash(conpassword,saltRounds);
                const registerData= await new Adminregistration({name,email,password:hashPass,conpassword:hashConPass}) 
            const result= await registerData.save();
            res.send({status:200, message:"Registration successfully!!!", insertedData:result})
            }
           else{
            res.send({message:"Your password and conpassword not match !!!"})
           }
        }
        else{
            res.send({message:"Already register with this email id in our database"})
        }
})



//Admin login API ///

app.post("/adminlogin", async(req,res)=>{
    const{email,password} = req.body
        if(email && password){
            const userEmail= await Adminregistration.findOne({email})
           // console.log(userEmail)
           if(userEmail!==null){
            const passMatch= await bcrypt.compare(password, userEmail.password)
            if(userEmail.email==email && passMatch){

                var token = jwt.sign({userEmail }, jwtkey);
                res.send({message: "Login Sucessfully",userEmail,token}) 
            }
            else{
                res.send({message: "Your email and password not match"}) 
            }
           }
           else{
            res.send({message: "You are not register user"}) 
           }
        }
        else{
            res.send({message:"All field are Require"}) 
        }

})


app.listen(process.env.PORT,()=>{
    console.log("This server running on port:"+PORT)
    console.log(`http://localhost:${process.env.PORT}`)
})