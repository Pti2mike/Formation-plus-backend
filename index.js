const express = require("express");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidableMiddleware());
app.use(cors());

const mongoose = require("mongoose");

// Create database

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// import des routes
const studentRoutes = require("./Routes/student");
app.use(studentRoutes);

const certificateRoutes = require("./Routes/certificate");
app.use(certificateRoutes);

const convenantRoutes = require("./Routes/convenant");
app.use(convenantRoutes);

//   Test
app.get("/", (req, res) => {
  res.json({ message: "Welcome on Formation-Plus!" });
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "Cette route n'existe pas" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
