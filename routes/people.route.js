const express=require("express");
const personRoute = express.Router();

 let Person=require("../models/person");// חיבור ל moudle

 personRoute.post("/add",async(req,res)=>{
    let person=new person(req.body);
    person.save();
    res.sendStatus(200).json({}); // 200 maens okay 
    

 });

 personRoute.get("/",async(req,res)=>{
   let users = await Person.find({});
   res.status(200).send(users);
 });


 module.exports = personRoute;