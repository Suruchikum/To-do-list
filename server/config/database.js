

const mongoose = require("mongoose");



const url = `mongodb://localhost:27017`;

const connectDatabase = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected!!");
  } catch (error) {
    console.error("Database Connection Failed:", error);
  }
};

connectDatabase();

