const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    image: { type: String },
    text: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
