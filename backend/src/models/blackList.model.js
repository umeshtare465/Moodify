const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "3d", // Token expires in 3 days (same as JWT)
  },
});

module.exports = mongoose.model("BlackList", blackListSchema);
