// Importing dependecies
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Defining the connection

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_DATABASE);
    console.log('Connected to MongoDb Database');
  } catch (error) {
    console.log(error);
  }
};
