import mongoose from "mongoose";

// Function to connect to MongoDB
export const connectDB = async () => {
  const baseUri = process.env.MONGODB_URI; // Don’t include /chat-app here
  const dbName = "chat-app";               // Your database name

  if (!baseUri) {
    console.error("❌ MONGODB_URI is not set.");
    process.exit(1);
  }

  const fullUri = `${baseUri}/${dbName}`;  // Final Mongo URI

  try {
    await mongoose.connect(fullUri);
    console.log("✅ MongoDB connected:", fullUri);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};
