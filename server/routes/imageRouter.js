const express = require("express");
const { uploadImage, getImagesByUserId, deleteImage } = require("../controllers/imageController");
const imageRouter = express.Router();

imageRouter.get("/get-images/:userId", getImagesByUserId)
imageRouter.post("/upload-image", uploadImage)
imageRouter.delete("/delete-image", deleteImage)

module.exports = {
    imageRouter
}