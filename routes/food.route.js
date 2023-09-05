const express=require("express");
const foodRoute = express.Router();

 let Food=require("../models/Food");// חיבור ל moudle

 

 foodRoute.get("/food/:price",async(req,res)=>{
  let data= await Food.find({Category: req.params.Category});
    res.status(200).json(data);
  });

  foodRoute.put("/update/:name", async (req,res)=>{
    let update= await Food.updateOne({Name:req.params.name}, {$set: {Price: req.body.Price}});
    res.status(200).send(update);
    });


    
    foodRoute.delete("/delete/:name", async (req,res)=>{
      let remove = await Food.findOneAndRemove({Name: req.params.name});
      res.status(200).send(remove);
      });
      

   
 foodRoute.post("/add",async(req,res)=>{
    let f=new Food(req.body);
    f.save();
    res.status(200).json(f);// 200 maens okay 
 });

 foodRoute.get("/",async(req,res)=>{
  let data= await Food.find({});
   res.status(200).json(data);
});

 module.exports = foodRoute;