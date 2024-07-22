const express = require("express");
const router = express.Router();
const galleyController = require("../Controllers/galleryController");

router.get("/allGalleryImages", galleyController.allImagesServer);
router.post("/galleryImages", galleyController.uploadToGallery);
router.delete("/deleteImage", galleyController.deleteImage);

module.exports = router;
