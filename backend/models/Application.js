// models/Application.js
// This file defines HOW an application is stored in MongoDB

const mongoose = require("mongoose");

// Schema defines the structure of stored application data
const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // name is mandatory for identification
    },
    email: {
      type: String,
      required: true, // email needed for contact & confirmation
    },
    subject: {
      type: String,
      required: true, // tells HR what the message is about
    },
    message: {
      type: String,
      required: true, // applicant's actual message
    },
    resume: {
      type: String, // stores uploaded resume file path
      required: true,
    },
  },
  { timestamps: true } // automatically adds createdAt & updatedAt
);

module.exports = mongoose.model("Application", applicationSchema);