const express = require("express");
const router = express.Router();
const { checkContent } = require("../controllers/moderationController");

router.post("/check", checkContent);

module.exports = router;