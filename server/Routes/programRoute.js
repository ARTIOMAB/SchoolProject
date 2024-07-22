const express = require("express");
const router = express.Router();
const programController = require("../Controllers/programController");

router.get(
  "/getProgramByType/:programType",
  programController.getProgramByType
);
router.post(
  "/createProgram",

  programController.createProgram
);
router.delete(
  "/deleteAllProgramsByType/:programType",
  programController.deleteAllProgramsByType
);
router.delete(
  "/deleteLastProgramByType/:programType",
  programController.deleteLastProgramByType
);

module.exports = router;
