
// const mongoes=require("mongooes");
// let User = new mongooes.schema(
//     {
//         name:{type:String},
//         email:{type:String, unique:true},
//         phone:{type:String}
//     },
//     {
//         collection:"users"
//     }
// );

// module.exports= mongoes.model("users",User);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    birthday: { type: String },
    Gender: { type: String },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

