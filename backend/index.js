const express = require("express");
const cors = require("cors");
const foodRoutes = require("./routes/foodRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/foods", foodRoutes);

app.get("/", (req, res) => {
  res.send("API jalan nich");
});

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});