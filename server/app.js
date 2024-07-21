const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const adminRoute = require("./Routes/adminRoute");
const boardRoutes = require("./Routes/boardRoute");
const galleryRoutes = require("./Routes/galleryRoute");
const programRoute = require("./Routes/programRoute");

app.use(express.static("public"));

const corsOptions = {
  origin: [
    "https://harish-school.onrender.com",
    "https://669d4a85ec4953248eb32f95--idyllic-rabanadas-eff3cd.netlify.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/admin", adminRoute);

app.use("/api/board/", boardRoutes);

app.use("/api/program/", programRoute);

app.use("/api/gallery/", galleryRoutes);

module.exports = app;
