const express = require("express")
const songRoute =require("./routes/songs.router")
const app=express();
const cors=require("cors")  

app.use(express.json());

app.use(cors())
app.use("/",songRoute)


module.exports=app