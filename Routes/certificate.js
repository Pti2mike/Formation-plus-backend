const express = require("express");
const router = express.Router();

// import des models

const Student = require("../Models/Student");
const Certificate = require("../Models/Certificate");
const Convenant = require("../Models/Convenant");

// Read un certificate

router.get("/all-certificates", async (req, res) => {
  try {
    const certificates = await Certificate.find().populate("student");

    res.status(200).json({ certificates });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update du message du certificat

router.post("/update-certificate", async (req, res) => {
  try {
    if (req.fields._id && req.fields.message) {
      const updateCertificate = await Certificate.findById({
        _id: req.fields._id,
      });

      updateCertificate.message = req.fields.message;

      await updateCertificate.save();

      res.status(200).json(updateCertificate);
    } else {
      res.status(400).json({ message: "Missing parameter" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
