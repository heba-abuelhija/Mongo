const mongoose=require("mongoose");
let Mainproducts= new mongoose.Schema(
    {
        image:{type:String},
        name:{type:String},
        price:{type:Number}
    },
    {
        collection:"mainproducts",
        versionKey:false
    }
);

module.exports= mongoose.model("mainproducts",Mainproducts);