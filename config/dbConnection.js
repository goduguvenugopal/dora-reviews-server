const mongoose = require("mongoose");

// connecting to database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting to database :", error);
  }
};

module.exports = connectDb;
