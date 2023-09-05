const express=require("express");
const FirstRoute = express.Router();

 let FirstProduct=require("../models/firstproducts");// חיבור ל moudle

 FirstRoute.post("/add",async(req,res)=>{
    let product=new product(req.body);
    product.save();
    res.sendStatus(200).json({}); // 200 maens okay 
    

 });

 FirstRoute.get("/",async(req,res)=>{
   let first = await FirstProduct.find({});
   res.status(200).send(first);
 });


 module.exports = FirstRoute;