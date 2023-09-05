const express=require("express");
const SaladRoute = express.Router();

 let saladProduct=require("../models/saladsproducts");// חיבור ל moudle

 SaladRoute.post("/add",async(req,res)=>{
    let product=new product(req.body);
    product.save();
    res.sendStatus(200).json({}); // 200 maens okay 
    

 });

 SaladRoute.get("/",async(req,res)=>{
   let salad = await saladProduct.find({});
   res.status(200).send(salad);
 });


 module.exports = SaladRoute;