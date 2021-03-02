const mongoose = require("mongoose");

const Convenant = mongoose.model("Convenant", {
  name: String,
  nbHeur: Number,
});

module.exports = Convenant;
