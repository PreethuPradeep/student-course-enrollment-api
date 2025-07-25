const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Course", courseSchema);
