const express = require("express");
const cors = require("cors");

const foodRoutes = require("./routes/foodRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK TEST");
});

app.get("/", (req, res) => {
  res.send("API jalan nich");
});

app.use("/api/foods", foodRoutes);

const PORT = process.env.PORT || 5000;
console.log("ENV PORT:", process.env.PORT);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
      console.log("Server running on port", PORT);
    });

  } catch (err) {
    console.error("FAILED TO START SERVER:", err);
    process.exit(1);
  }
};

startServer();