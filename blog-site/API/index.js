const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const path=require("path")


dotenv.config();

app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))


const authRoute=require("./Routes/Auth")
const userRoute=require("./Routes/Users")
const postRoute=require("./Routes/Posts")
const categoryRoute=require("./Routes/Categories")


mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to mongodb"))
    .catch((err) => console.log(err));
    const storage=multer.diskStorage({
       destination: (req,res,cb)=>{
        cb(null,"images")
       },filename:(req,file,cb)=>{
        cb(null,req.body.name)
       }
    })
    const upload = multer({storage:storage})
    app.post("/API/upload",upload.single("file"),(req,res)=>{
        res.status(200).json("File has been uploaded")
    })
    app.use("/API/Auth",authRoute)
    app.use("/API/Users",userRoute)
    app.use("/API/Posts",postRoute)
    app.use("/API/Categories",categoryRoute)
app.listen("5000", () => {
    console.log("Backend is running")
})