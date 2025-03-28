const mongoose = require('mongoose');
require("dotenv").config();


const mongo_url = process.env.MONGO_CNN;

mongoose.connect(mongo_url)
.then(() => {
    console.log('MongoDB Connected...');
}).catch((err) =>{
    console.log('MongoDB Connection Error:' , err);
})
