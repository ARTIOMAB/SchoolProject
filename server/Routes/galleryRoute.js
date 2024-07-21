const express = require("express");
const router = express.Router();
const galleyController = require("../Controllers/galleryController");
// const authenticateRoute = require("../middleware/authenticateRoute");

router.get("/allGalleryImages", galleyController.allImagesServer);

// router.use(authenticateRoute);
router.post("/galleryImages", galleyController.uploadToGallery);
router.delete("/deleteImage", galleyController.deleteImage);

module.exports = router;
