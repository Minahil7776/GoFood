const express = require("express");
const User = require("../db/schema");
const router = express.Router()
require("../db/conn");

//SignUp route
router.post("/",(req,res)=>{
    const {name,location,email,password} = req.body;
    if(!name||!location||!email||!password){
        return res.status(400).json({message:"Please fill all the feilds"})
    }
    User.findOne({email:email})
    .then(user=>{
        if(user){
            res.status(500).json({message:"Account Already Exist"})
        }
        else{
            const newuser = new User({name:name,location:location,email:email,password:password})
            newuser.save().then(result=>res.json("Account Created"))
            .catch(err=>res.json(err))
        }
    })
      .catch(err=>err.json(err))  
})

//Login route

module.exports = router;
