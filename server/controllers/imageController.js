const cloudinary = require("cloudinary");
const Image = require("../models/imageModel");

const uploadImage = async (req, res) => {
    try {
        const { image, name, size, userId } = req.body;
        const { public_id, secure_url } = await cloudinary.v2.uploader.upload(
            image,
            {
                folder: process.env.CLOUD_FOLDER,
            }
        );
        const imageData = await Image.create({
            name,
            size,
            publicId: public_id,
            secureUrl: secure_url,
            userId
        })
        res.status(200).json({ imageData });
    } catch (err) {
        res.status(400).json({ err })
    }
};

const getImagesByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const images = await Image.find({ userId });
        res.status(200).json({ images })
    } catch (err) {
        res.status(400).json({ err });
    }
}

const deleteImage = async (req, res) => {
    try {
        const { publicId } = req.body;
        await cloudinary.uploader.destroy(publicId);
        const deletedImage = await Image.findOneAndDelete({ publicId });
        res.status(200).json({ deletedImage, msg: 'image deleted successfully' })
    } catch (err) {
        res.status(400).json({ err })
    }
}

module.exports = {
    uploadImage,
    getImagesByUserId,
    deleteImage
}