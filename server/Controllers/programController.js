const Program = require("../Models/programModel");

exports.createProgram = async (req, res) => {
  try {
    const { programType, title, date } = req.body;
    const newProgram = new Program({
      programType: programType,
      title: title,
      date: date,
    });
    await newProgram.save();

    res.status(200).json(newProgram);
  } catch (error) {
    res.status(400).json({
      status: "Bad Request",
      massage: error.massage,
    });
  }
};

exports.getProgramByType = async (req, res) => {
  try {
    const { programType } = req.params;
    const programs = await Program.find({ programType: programType });

    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: error.message,
    });
  }
};

exports.deleteAllProgramsByType = async (req, res) => {
  try {
    const { programType } = req.params;
    const result = await Program.deleteMany({ programType: programType });
    res
      .status(200)
      .json({ message: `All programs of type ${programType} deleted`, result });
  } catch (error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: error.message,
    });
  }
};

exports.deleteLastProgramByType = async (req, res) => {
  try {
    const { programType } = req.params;
    const lastProgram = await Program.findOne({
      programType: programType,
    }).sort({ createdAt: -1 });
    if (!lastProgram) {
      return res.status(404).json({ message: "No program found" });
    }
    await Program.deleteOne({ _id: lastProgram._id });
    res.status(200).json({ message: "Last program deleted", lastProgram });
  } catch (error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: error.message,
    });
  }
};
