const express = require("express");
const router = express.Router();
const programController = require("../Controllers/programController");
// const authenticateRoute = require("../middleware/authenticateRoute");

router.get(
  "/getProgramByType/:programType",
  programController.getProgramByType
);

// router.use(authenticateRoute);

router.post(
  "/createProgram",
  authenticateRoute,
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
