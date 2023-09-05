const mongoose=require("mongoose");
let products= new mongoose.Schema(
    {
        image:{type:String},
        name:{type:String},
        price:{type:Number}
    },
    {
        collection:"products",
        versionKey:false
    }
);

module.exports= mongoose.model("products",products);