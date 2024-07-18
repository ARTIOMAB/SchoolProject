const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");

router.route("/login").post(adminController.loginAdmin);
router.route("/create").post(adminController.createAdmin);

module.exports = router;
