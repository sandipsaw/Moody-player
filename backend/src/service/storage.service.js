const Imagekit = require("imagekit")

var imagekit = new Imagekit({
    publicKey: "public_YS3+OHxMUiO7gRTeCeMOEKhwccs=",
    privateKey: "private_380+5Q3IZ2HySmUaWZm9UuJM6zs=",
    urlEndpoint: "https://ik.imagekit.io/mo5zc1l7q"
});

const uploadFile =(file)=>{

    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:"sandy ka songs"
        },(error,result)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(result);
            }
        })
    })
}


module.exports=uploadFile
