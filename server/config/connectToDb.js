import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_DATABASE);
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
}

export default connectToDb;
