const mongoose = require('mongooses');
require("dotenv").config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected")
    }catch(error){
        console.log("DataBase connection Fail");
        process.exit(1);
    }
}

module.exports = connectDB;