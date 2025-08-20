require('dotenv').config();
const app =require("./src/app")
const connectDb=require("./src/db/db")

console.log(process.env.MONGODB_URL);



connectDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})