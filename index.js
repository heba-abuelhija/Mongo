// const express=require("express");
// const app=express();
// const port=8000;

// const mongoes=require("mongoose");
// var mongoDB="mongodb://localhost:27017//morDB";
// mongoes.connect(mongoDB,{useNewUrlParser:true});
// const bodyparser=require("body-parser");
// app.use(bodyparser.urlencoded({extended:flase}));


// var people = require("./routes/people/route");
// app.use("/people,people");

// app.listen(port,()=>{console.log("server started listening to port",port)});

const express=require("express");
const app=express();
const port=8000;
const cors=require("cors");
app.use(cors());

const mongoose=require("mongoose");
const mongoDB="mongodb://127.0.0.1:27017/DBfinal";
mongoose.connect(mongoDB,{useNewUrlParser:true});
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const users= require("./routes/people.route");
app.use("/users",users);

const products= require("./routes/food.route");
app.use("/products",products);

const salad= require("./routes/salad.route");
app.use("/products/saladsproducts",salad);

const main= require("./routes/main.route");
app.use("/products/mainproducts",main);

const starters= require("./routes/starters.route");
app.use("/products/startersproducts",starters);

const first= require("./routes/first.route");
app.use("/products/firstproducts",first);


const Cart= require("./routes/cart.route");
app.use("/cart",Cart); 


app.listen(port,()=>{console.log("server started listening to port",port)});

