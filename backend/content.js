const express = require("express");
const router = express.Router();

// WHY: This API sends landing page content to frontend
router.get("/", (req, res) => {
  res.json({
    heroTitle: "Hire Faster. Hire Smarter.",
    heroSubtitle: "Talencee connects companies with top talent.",
    services: [
      "Talent Hiring",
      "Recruitment Support",
      "Career Growth"
    ]
  });
});

module.exports = router;

