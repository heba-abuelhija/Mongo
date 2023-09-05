const express=require("express");
const MainRoute = express.Router();

 let MainProduct=require("../models/mainstarters");// חיבור ל moudle

 MainRoute.post("/add",async(req,res)=>{
    let product=new product(req.body);
    product.save();
    res.sendStatus(200).json({}); // 200 maens okay 
    

 });

 MainRoute.get("/",async(req,res)=>{
   let Main = await MainProduct.find({});
   res.status(200).send(Main);
 });


 module.exports = MainRoute;