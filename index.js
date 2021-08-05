const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080 ;
const mongodb = require('mongodb').MongoClient;
const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({extended:true})); // params יכולת לשלוף מידע מ
app.use(cors());

mongodb.connect('mongodb://localhost:27017',{})





app.listen(PORT, ()=>{
    console.log(`Server is up one port:${PORT}`);
})

app.get('/', (req,res)=>{
    res.send("success")
})
