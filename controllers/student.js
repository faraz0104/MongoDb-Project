import { student } from "../models/student.js";




export const addstudent =(req,res)=>
{
    console.log("You are in addstudent function")
    const students =new student(
        
        {
         studentFirstName : req.body.studentFirstName,
        collegeName : req.body.collegeName,
        location : req.body.location,
    })
    students.save()
    .then(
        (result)=>{
            res.send('{"result" : "Success" }')

             
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}


export const getStudent = (req,res)=>
{
    if(req.query.studentFirstName)
    {
        console.log("You are in getstudent function")
    student.aggregate(
        [{$match:{studentFirstName : req.query.studentFirstName }}]
    )
    .then(
           (result)=>{res.send(result)}
        )
    .catch((err)=>{console.log(err)})
    }

    else
    {
        console.log("donee not")
        student.aggregate(
            [{$sort:{studentFirstName : 1}}]
        )
        .then(
               (result)=>{res.send(result)}
            )
        .catch((err)=>{console.log(err)})
    }
}