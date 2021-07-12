import { quote } from "../models/quotes.js";


export const addquote=(req,res)=>
{
    console.log("Adding a quotes in DataBase")
    const quotes =new quote(
        {
         quote : req.body.quote,
        author : req.body.author,
        
    })
    quotes.save()
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

export const getallquote=(req,res)=>{
    //if(req.query.quote){
        console.log("done")
        quote.aggregate(
            [{$sort:{quote:-1}}]
        )
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    }
