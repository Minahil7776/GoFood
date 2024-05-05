//requiring all important packets
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./db/schema");
const body_parser = require("body-parser");
const port = process.env.PORT || 5000;
require("./db/conn");
const SignUpRouter = require("./routers/sign");
const LoginRouter = require("./routers/log");

//setting midleware
app.use(cors());
app.use(body_parser.json());

//Home page
app.get("/",(req,res)=>{
    res.send("Hello")
})

function myMiddleware(req, res, next) {
  console.log("This is a middleware function!");
  next(); // Call next() to proceed to the next middleware or route handler
}

app.use(myMiddleware)

//SignIn page login route
app.use("/SignUp",SignUpRouter)
app.use("/Login",LoginRouter)



//listening server
app.listen(port,()=>{
    console.log("Listening at port",port);
})
