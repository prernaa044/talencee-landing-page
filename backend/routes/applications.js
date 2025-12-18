// routes/applications.js
// Handles job application submission & resume upload

const express = require("express");
const multer = require("multer");
const Application = require("../models/Application");

const router = express.Router();

// Multer config: where & how resume files are stored
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // resumes saved in uploads folder
  },
  filename: function (req, file, cb) {
    // unique filename to avoid overwriting
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Accept only PDF/DOC/DOCX resumes
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.mimetype === "application/msword"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF or DOC files allowed"));
    }
  },
});

// POST: Submit application
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation to avoid empty submissions
    if (!name || !email || !subject || !message || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save application to MongoDB
    const application = new Application({
      name,
      email,
      subject,
      message,
      resume: req.file.path,
    });

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;