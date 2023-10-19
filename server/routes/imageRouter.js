const express = require("express");
const cloudinary = require("cloudinary");
const imageRouter = express.Router();

imageRouter.post("/upload-image", async(req,res)=> {
    try{
        const { image } = req.body;
      const { public_id, secure_url } = await cloudinary.v2.uploader.upload(
        image,
        {
          folder: process.env.CLOUD_FOLDER,
        }
    );
    res.status(200).json({ public_id, secure_url });
    }catch(err){
        req.status(400).json({ err })
    }
})

module.exports = {
    imageRouter
}