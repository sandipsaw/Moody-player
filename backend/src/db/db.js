const mongoose =require("mongoose")

const connectDb=()=>{
    mongoose.connect("mongodb+srv://sandipsaw449:6pOQePU0y5sDAgDH@cluster0.0k1shvy.mongodb.net/sandy").then(()=>{
        console.log("connected to db");
        
    })
    .catch((error)=>{
        console.log(error);
        

    })
}


module.exports=connectDb