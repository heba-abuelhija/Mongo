const mongoose=require("mongoose");
let Firstproducts= new mongoose.Schema(
    {
        image:{type:String},
        title:{type:String},
        name:{type:String},
        price:{type:Number}
    },
    {
        collection:"firstproducts",
        versionKey:false
    }
);

module.exports= mongoose.model("firstproducts",Firstproducts);