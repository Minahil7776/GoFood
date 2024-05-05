const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type:String,
        require:true

    }
})

const User = new mongoose.model("User-Data",user_schema);
module.exports = User;

