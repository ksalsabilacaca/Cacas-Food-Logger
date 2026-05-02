const Food = require("../models/foodModel");

exports.createFood = async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const saved = await newFood.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find().sort({ date: -1 });
    res.json(foods);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateFood = async (req, res) => {
  try {
    const updated = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSummary = async (req, res) => {
  try {
    const { range } = req.query;

    let startDate = new Date();

    if (range === "7days") {
      startDate.setDate(startDate.getDate() - 7);
    } else if (range === "30days") {
      startDate.setDate(startDate.getDate() - 30);
    } else {
      startDate.setHours(0, 0, 0, 0); 
    }

    const foods = await Food.find({
      date: { $gte: startDate },
    });

    const totalCalories = foods.reduce((sum, f) => sum + (f.calories || 0), 0);
    const totalPrice = foods.reduce((sum, f) => sum + (f.price || 0), 0);

    res.json({
      totalMeals: foods.length,
      totalCalories,
      totalPrice,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};