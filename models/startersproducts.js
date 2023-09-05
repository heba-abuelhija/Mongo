const mongoose=require("mongoose");
let Startersproducts= new mongoose.Schema(
    {
        image:{type:String},
        name:{type:String},
        price:{type:Number}
    },
    {
        collection:"startersproducts",
        versionKey:false
    }
);

module.exports= mongoose.model("startersproducts",Startersproducts);