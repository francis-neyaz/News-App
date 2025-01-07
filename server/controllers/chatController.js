const Message = require("../models/Message");

// Save a new chat message
const saveMessage = async (req, res) => {
  const { sender, content } = req.body;
  try {
    const newMessage = new Message({ sender, content, timestamp: Date.now() });
    await newMessage.save();

    res.status(201).json({ message: "Message saved successfully", newMessage });
  } catch (error) {
    console.error("Error saving message:", error.message);
    res.status(500).json({ message: "Failed to save message" });
  }
};

// Get chat history
const getChatHistory = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 }).limit(50); // Fetch last 50 messages
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching chat history:", error.message);
    res.status(500).json({ message: "Failed to fetch chat history" });
  }
};

module.exports = { saveMessage, getChatHistory };
