const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://salsabilamaharani_db_user:12345678caca@ac-dznc2dn-shard-00-00.t8cjwnv.mongodb.net:27017,ac-dznc2dn-shard-00-01.t8cjwnv.mongodb.net:27017,ac-dznc2dn-shard-00-02.t8cjwnv.mongodb.net:27017/food-logger?ssl=true&replicaSet=atlas-vgzqgo-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;