const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080 ;
const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Server is up one port:${PORT}`);
})

app.get('/', (req,res)=>{
    res.send("success")
})
