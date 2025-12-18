const mongoose = require("mongoose");

// WHY: Defines how a Job document should look in MongoDB
const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// WHY: Prevents model overwrite error in dev mode
module.exports = mongoose.models.Job || mongoose.model("Job", JobSchema);