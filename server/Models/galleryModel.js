const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    galleryImage: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", gallerySchema);
module.exports = Gallery;
