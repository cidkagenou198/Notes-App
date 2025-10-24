const mongoose = require('mongoose');
require("dotenv").config();

const connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', true); // remove the deprecation warning

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // stop the app if DB fails
  }
};

module.exports = connectToMongo;
