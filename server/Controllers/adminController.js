const Admin = require("../Models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
require("dotenv").config();
const secret = process.env.SECRET_KEY;

exports.createAdmin = async (req, res) => {
  try {
    const userExists = await Admin.findOne({ userName: req.body.userName });

    if (userExists) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = await Admin.create({
      ...req.body,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, secret, { expiresIn: "3d" });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 25920000,
      sameSite: "strict",
    });

    res.status(201).json({
      user: newUser,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error",
    });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await Admin.findOne({ userName });
    console.log(user);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect userName or Password",
      });
    }

    const token = jwt.sign({ _id: user._id }, secret, { expiresIn: "3d" });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 25920000,
      sameSite: "strict",
    });

    res.status(201).json({
      user: user,
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
