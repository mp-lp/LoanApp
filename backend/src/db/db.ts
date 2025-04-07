import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    console.log("hi");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: process.env.DB_NAME,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
