const express = require("express");
const router = express.Router();

// import des models

const Student = require("../Models/Student");
const Certificate = require("../Models/Certificate");
const Convenant = require("../Models/Convenant");

// Create un étudiant

router.post("/add-student", async (req, res) => {
  // Ajout d'un étudiant
  try {
    let newCertificate = null;
    // const newStudent = req.fields.lastname;
    let newStudent = new Student({
      lastname: req.fields.lastname.toUpperCase(),
      firstname: req.fields.firstname.toUpperCase(),
      mail: req.fields.mail,
      convenant: req.fields.convenant,
      certificate: req.fields.certificate,
    });
    const convenantInfo = await Convenant.findById({
      _id: req.fields.convenant,
    });

    if (!req.fields.certificate) {
      newCertificate = new Certificate({
        student: newStudent._id,
        convenant: req.fields.convenant,
        message: `Bonjour ${newStudent.lastname} ${newStudent.firstname},\r\nVous avez suivi ${convenantInfo.nbHeur} heures de formation chez Formation-Plus.\r\nPouvez-vous nous retourner ce mail avec la pièce jointe signée?\r\nCordialement,\r\nFormation-Plus`,
      });
      await newCertificate.save();
      newStudent.certificate = newCertificate._id;
    }

    await newStudent.save();

    res.status(200).json({ newStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/list-student", async (req, res) => {
  try {
    const student = await Student.find()
      .populate("convenant")
      .populate("certificate");
    console.log(student);

    res.status(200).json({ student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
