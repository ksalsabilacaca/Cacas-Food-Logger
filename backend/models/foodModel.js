const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  price: Number,
  time: String, 
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Food", foodSchema);