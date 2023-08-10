


const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();

// Middleware
const upload = require('../middleware/upload')



// Schema  
require('../models/Image');
const Images = mongoose.model("ImageDetails");



router.post("/upload-image", upload.single("image"), async (req, res)=>{
    console.log(req.file)
    const imageName = req.file.filename;
    try {     
        await Images.create({image: imageName})
        res.json({status: "ok"})
    } catch (error) {
        res.json({status: "Error", msg: error.message})
    }
});


router.get("/get-image", async (req, res)=>{

    try {

        Images.find().then((data)=>{
            res.send({data: data})
        });

    } catch (error) {
        res.json({status: "Error", msg: error.message})
    }
})




module.exports = router;
