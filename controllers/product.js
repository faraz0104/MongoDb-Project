import { product } from "../models/product.js";




export const addproduct=(req,res)=>
{
    console.log("posting")
    const products =new product(
        {
         productName : req.body.productName,
        price :req.body.price,
        
    })
    products.save()
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

export const getallproduct=(req,res)=>{
    //if(req.query.quote){
        console.log("done")
        product.aggregate(
            [{$sort:{product:-1}}]
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