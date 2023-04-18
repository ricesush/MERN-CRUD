// importing dependencies
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Defining the connection

export const ConnectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_DATABASE);
    console.log('Connected to MongoDB database!');
  } catch (error) {
    console.log(error);
  }
};
