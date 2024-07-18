const express = require("express");
const router = express.Router();
const boardController = require("../Controllers/boardController");
const upload = require("../middleware/multerMiddleware");
const authenticateRoute = require("../middleware/authenticateRoute");

router.get("/getBoardItems", boardController.getBoardItems);
router.use(authenticateRoute);
router.get("/findBoardItem", boardController.findBoardItem);
router.post("/createBoard", upload, boardController.createBoard);
router.put("/updateBoard/:id", upload, boardController.updateBoardItem);
router.delete("/deleteBoard/:id", boardController.deleteBoardItem);

module.exports = router;
