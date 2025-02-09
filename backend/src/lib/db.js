import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Debugging: Log the MongoDB URI to ensure it's being loaded correctly
    console.log("MongoDB URI:", process.env.MONGODB_URI);

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment variables.");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1); 
  }
};