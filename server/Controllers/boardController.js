const Board = require("../Models/boardModel");

exports.createBoard = async (req, res) => {
  try {
    const newBoard = new Board({
      image: req.file.filename,
      title: req.body.title,
      text: req.body.text,
    });

    await newBoard.save();
    res.status(200).json(newBoard);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getBoardItems = async (req, res) => {
  try {
    const allBoardItems = await Board.find();
    res.status(200).json(allBoardItems);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.findBoardItem = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm;
    if (typeof searchTerm !== "string") {
      console.log("search terms must be a string");
    }

    const boardItem = await Board.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { text: { $regex: searchTerm, $options: "i" } },
      ],
    });
    res.status(200).json(boardItem);
  } catch (error) {
    res.status(400).json({
      status: "request fail",
      message: error.message,
    });
  }
};

exports.updateBoardItem = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      text: req.body.text,
    };
    console.log(req.body);

    if (req.file) {
      updateData.image = req.file.filename;
    }
    const updatedBoardItem = await Board.findByIdAndUpdate(
      req.params.id,
      updateData,

      { new: true }
    );
    console.log(updateData);
    res.status(200).json(updatedBoardItem);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "request fail",
      message: error.message,
    });
  }
};

exports.deleteBoardItem = async (req, res) => {
  try {
    await Board.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Board item deleted successfully" });
  } catch (error) {
    res.status(400).json({
      status: "request fail",
      message: error.message,
    });
  }
};
