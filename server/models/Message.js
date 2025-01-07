const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true, // Username of the message sender
  },
  content: {
    type: String,
    required: true, // The actual message text
  },
  timestamp: {
    type: Date,
    default: Date.now, // Default to current date and time
  },
}, {
  timestamps: false, // No need for `createdAt` and `updatedAt` here
});

module.exports = mongoose.model("Message", messageSchema);
