// connecting to MongoDB

import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "shared_prompt",
    });

    isConnected = true;
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log(error);
  }
};
