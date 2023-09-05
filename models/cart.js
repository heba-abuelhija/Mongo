const mongoose=require("mongoose");
let cartproducts= new mongoose.Schema(
    {
        id:Number,
        product:{
        image:String,
        name:String,
        price:Number
        },
        quantity:Number
      
          
    }
);

let cart= new mongoose.Schema(
    {
       products:[cartproducts],
       paid:Boolean,
       total:Number,
       user:{
        name: String,
        email: String,
        password:String,
        birthday: String,
        Gender: String
       }
    },
    {
        collection:"cart",
        versionKey:false
    }
);

module.exports= mongoose.model("cart",cart);