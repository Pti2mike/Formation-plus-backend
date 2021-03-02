const mongoose = require("mongoose");

const Certificate = mongoose.model("Certificate", {
  message: String,

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },

  convenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Convenant",
  },
});

module.exports = Certificate;
