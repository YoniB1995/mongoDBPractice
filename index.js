const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080 ;
const CONNECTION_URL= process.env.CONNECTION_URL ;
// const mongodb = require('mongodb').MongoClient;
const db = require('./src/DB') // index יתפוס קבצי
const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({extended:true})); // params יכולת לשלוף מידע מ
app.use(cors());

db.on('error',()=> console.log("error"))

app.listen(PORT, ()=>{
    console.log(`Server is up one port:${PORT}`);
})

app.get('/', (req,res)=>{
    connectToDB(res)

})



// const connectToDB = (resFromGet)=> {
// return mongodb.connect(`${CONNECTION_URL}dbSchool`,
// (error,dbResult)=>{
//     if (error) console.log(error);
//     const studentCollection = dbResult.db('dbSchool').collection('students');

//     // =========================   Insert Document ========================= //
//     const document = {"first_name":"yossi","last_name":"simha","age":29};
    // studentCollection.insertOne(document,(error,result)=>{
    //     if (error) console.log(error);
    // resFromGet.send(result)
    //     console.log(result);
    // });

    // =========================   Find Document ========================= //

    // studentCollection.findOne({first_name:"dani"},(err,result)=>{
    //     if (err) console.log(err);
    //     resFromGet.send(result);
    // })


    // =========================   Delete Document ========================= //

    // studentCollection.deleteOne({first_name:"dani"},(err,result)=>{
    //     if (err) console.log(err);
    //     resFromGet.send(result);
    // })

    // studentCollection.deleteMany({first_name:"yossi"},(err,result)=>{
    //     if (err) console.log(err);
    //     resFromGet.send(result);
    // })
// })
// }
