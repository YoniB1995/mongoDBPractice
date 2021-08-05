const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080 ;
const CONNECTION_URL= process.env.CONNECTION_URL ;

mongoose.connect(`${CONNECTION_URL}dbSchool`,(error,dbResult)=>{
    if (error) console.log(error);
    
})