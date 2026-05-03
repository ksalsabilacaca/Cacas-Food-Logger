const mongoose = require("mongoose");

let isConnected = false;

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI belum di set");
}

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, 
    });

    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB ERROR:", error);
    throw error; 
  }
};

module.exports = connectDB;