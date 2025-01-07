const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  preferences: {
    type: [String], // Array of categories (e.g., ["sports", "tech"])
    default: [],   // Default to no preferences
  },
}, {
  timestamps: true, // Automatically add `createdAt` and `updatedAt`
});

module.exports = mongoose.model("User", userSchema);
