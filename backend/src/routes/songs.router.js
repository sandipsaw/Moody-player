const express =require("express")
const multer=require("multer")
const uploadFile =require("../service/storage.service")
const songmodel =require("../models/Song.models")

const upload=multer({storage:multer.memoryStorage()});
const router=express.Router();


router.post("/songs",upload.single("audio"), async (req,res)=>{

    console.log(req.body);
    console.log(req.file);
    console.log(req.body);
    const {title,artist,mood}=req.body
    console.log(req.file);

    const fileData=await uploadFile(req.file);

    const song=await songmodel.create({
        title:title,
        artist:artist,
        mood:mood,
        audio:fileData.url
    })

    res.status(201).json({
        message:"song created successfully",
        song:song
    })
    
    
})




router.get("/songs", async (req,res)=>{

        const {mood}=req.query;

   const songs = await songmodel.find({
    mood:mood
   })

   res.status(200).json({
    message:"fetch successfully",
    song:songs
   })
})

module.exports=router