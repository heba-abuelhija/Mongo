const express=require("express");
const StartersRoute = express.Router();

 let startersProduct=require("../models/startersproducts");// חיבור ל moudle

 StartersRoute.post("/add",async(req,res)=>{
    let product=new product(req.body);
    product.save();
    res.sendStatus(200).json({}); // 200 maens okay 
    

 });

 StartersRoute.get("/",async(req,res)=>{
   let starters = await startersProduct.find({});
   res.status(200).send(starters);
 });


 module.exports = StartersRoute;