const express = require("express");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(formidableMiddleware());
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
