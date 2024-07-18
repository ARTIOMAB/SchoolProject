const jwt = require("jsonwebtoken");
require("dotenv").config();
const Admin = require("../Models/adminModel");
const secret = process.env.SECRET_KEY;

const authenticateRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("Token from cookie:", token);

    if (!token) {
      return res.status(401).send({ message: "Unauthorized: Missing token" });
    }

    const decoded = jwt.verify(token, secret);
    console.log("Decoded token:", decoded);
    const adminExists = await Admin.findOne({ _id: decoded._id });
    console.log("Admin exists:", adminExists);

    if (!adminExists) {
      return res.status(401).send({ message: "Unauthorized: Admin not found" });
    }
    req.admin = adminExists;
    next();
  } catch (error) {
    console.log("Error in authenticateRoute:", error);
    res.status(500).json({ message: error.message || "An error occurred." });
  }
};
module.exports = authenticateRoute;
