const express=require("express");
const CartRoute = express.Router();

let Cart=require("../models/cart");



CartRoute.post("/add",async(req,res)=>{
    let f=new Cart(req.body);
    await f.save();
    res.status(200).send(f);// 200 maens okay 
 }); 

 CartRoute.delete("/delete/:name", async (req,res)=>{
    let remove = await Cart.findOneAndRemove({Name: req.params.name});
    res.status(200).send(remove);
    });

CartRoute.get("/",async(req,res)=>{
    let data= await Cart.find({Category: req.params.Category});
      res.status(200).json(data);
    });

    module.exports = CartRoute;