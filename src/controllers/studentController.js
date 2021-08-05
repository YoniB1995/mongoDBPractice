const studentModel = require('../models/studentModel')

const getAllStudents = async (req,res) => {
    try{
    const students = await studentModel.find({},(err,result)=>{
        if (err) console.log(err);
        res.json({message:"Success",data:result})
    })
    return students;
}catch(error){
        res.json({message:"database problem",error:error})

    }
}


module.exports = {getAllStudents}