const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../controllers/messageController");

router.get("/", getMessages);
router.post("/", sendMessage);

module.exports = router;