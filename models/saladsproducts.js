const mongoose=require("mongoose");
let Saladproducts= new mongoose.Schema(
    {
        image:{type:String},
        name:{type:String},
        price:{type:Number}
    },
    {
        collection:"saladsproducts",
        versionKey:false
    }
);

module.exports= mongoose.model("saladsproducts",Saladproducts);