const express = require("express");
const { saveMessage, getChatHistory } = require("../controllers/chatController");

const router = express.Router();

router.post("/", saveMessage);      // Save a new chat message
router.get("/", getChatHistory);    // Retrieve chat history

module.exports = router;
