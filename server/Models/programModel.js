const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    programType: { type: String, require: true },
    title: { type: String, require: true },
    date: { type: Date, require: true },
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.model("Program", programSchema);
module.exports = Program;
