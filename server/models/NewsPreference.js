const mongoose = require("mongoose");

const newsPreferenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  categories: {
    type: [String], // Array of categories (e.g., ["sports", "tech"])
    default: [],   // Default to no preferences
  },
}, {
  timestamps: true, // Automatically add `createdAt` and `updatedAt`
});

module.exports = mongoose.model("NewsPreference", newsPreferenceSchema);
