const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://salsabilamaharani_db_user:12345678caca@cluster0.t8cjwnv.mongodb.net/food-logger"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;