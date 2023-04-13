// Importing depndecies
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Importiong ENV variables
dotenv.config();

// defining the connection

export const ConnectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_DATABASE);
    console.log('Connected to mongoDb Database!');
  } catch (error) {
    console.log(error);
  }
};
