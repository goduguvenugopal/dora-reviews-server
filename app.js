require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const corsOptions = require("./config/cors");
const reviewRoute = require("./route/reviewRoute");

// global middlewares
app.use(cors(corsOptions)); // ✅ Use only the restricted CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// global route register (e.g. app.use("/api/reviews", reviewRoutes))
app.use("/api", reviewRoute);

// server listener
app.listen(PORT, async () => {
  try {
    await connectDb();
    console.log("Server running on port:", PORT);
  } catch (error) {
    console.error("DB Connection failed:", error.message);
  }
});
