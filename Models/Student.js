const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  lastname: String,
  firstname: String,
  mail: String,

  convenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Convenant",
  },

  certificate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Certificate",
  },
});

module.exports = Student;
