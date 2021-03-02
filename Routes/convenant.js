const express = require("express");
const router = express.Router();

// import des models

const Student = require("../Models/Student");
const Certificate = require("../Models/Certificate");
const Convenant = require("../Models/Convenant");

// Read toutes les convenant

router.get("/list-convenants", async (req, res) => {
  try {
    const convenants = await Convenant.find();
    console.log(convenants);

    res.status(200).json({ convenants });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create une convenant

router.post("/add-convenant", async (req, res) => {
  try {
    const newConvenant = new Convenant({
      name: req.fields.name,
      nbHeur: req.fields.nbHeur,
    });
    await newConvenant.save();

    res.status(200).json({ newConvenant });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
