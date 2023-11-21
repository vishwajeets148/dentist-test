// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/vishal')
// .then(()=>{
//     console.log("Mongodb connected")
// })
// .catch(()=>{
//     console.log("Not connected to Mongodb")
// })

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vishwajeets148:$4xWfXvSKK6.eFC@dentist.s1up4qy.mongodb.net/Dentist?retryWrites=true&w=majority')
.then(()=>{
    console.log("Mongodb connected")
})
.catch(()=>{
    console.log("Not connected to Mongodb")
})