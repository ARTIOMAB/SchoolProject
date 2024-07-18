const Gallery = require("../Models/galleryModel");
const cloudinary = require("../middleware/cloudinaryMiddleware");

exports.uploadToGallery = async (req, res) => {
  try {
    const galleryImage = req.body.galleryImage;
    if (!galleryImage) {
      return res.status(400).json({
        status: "Bad server request",
        message: "No image provided",
      });
    }

    let gallery = await Gallery.findOne();
    if (!gallery) {
      gallery = new Gallery({ galleryImage: [] });
    }

    gallery.galleryImage.push(galleryImage);
    await gallery.save();

    res.status(200).json(gallery);
    console.log(gallery);
  } catch (error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: error.message,
    });
  }
};

exports.allImagesServer = async (req, res) => {
  try {
    const response = await Gallery.findOne();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: error.message,
    });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) {
      return res.status(400).json({
        status: "Bad server request",
        message: "No public_id provided",
      });
    }
    await cloudinary.uploader.destroy(public_id);
    let gallery = await Gallery.findOne();
    if (gallery) {
      gallery.galleryImage = gallery.galleryImage.filter(
        (img) => img !== public_id
      );
      await gallery.save();
    }
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: error.message,
    });
  }
};
