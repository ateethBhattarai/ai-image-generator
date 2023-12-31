import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(url);
    console.log("db connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
