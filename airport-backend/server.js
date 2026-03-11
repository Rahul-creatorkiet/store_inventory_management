const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/flightRoutes"));
app.use(errorHandler);


app.get("/", (req, res) => {
  res.send("✈️ Airport Management Backend Running");
});

const PORT = process.env.PORT || 8000;
const BASE_URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server Running Successfully`);
  console.log(`🌐 Local URL: ${BASE_URL}`);
  console.log(`📡 API Base: ${BASE_URL}/api`);
  console.log("=================================");
});