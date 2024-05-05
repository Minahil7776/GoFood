const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/food-data").then(
    ()=>{
        console.log("Connection successful")
    }
).catch((e)=>{
    console.log(e);
})