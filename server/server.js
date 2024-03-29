import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { postRoute } from './src/routes/Post.js';
import cors from 'cors';

// Importing ENV variables
dotenv.config();

// creating App level middleware
const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors());

// Routing
app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

app.use('/post', postRoute);

// Defining connection to DB and starting the server

try {
  mongoose.connect(MONGODB_URL);
  console.log('Connected to MongodDB!');
  app.listen(PORT, () => console.log(`Connected to port: ${PORT}`));
} catch (error) {
  console.log(error);
}
