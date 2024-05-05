const express = require("express");
const User = require("../db/schema");
const router = express.Router()
require("../db/conn");
const body_parser = require("body-parser")
const app = express()
app.use(body_parser.json())

//login route
router.post("/", async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all the feilds" })
    }
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        if(user.password !== password){
            return res.status(404).json({ message: "Incorrect Password" })
        }
        res.status(200).json({ message: "Login Successfully", name: user.name })
    }  
catch(error){
    console.log(error);
    res.status(404).json({message:"Internal server error"})
}

})

module.exports = router;