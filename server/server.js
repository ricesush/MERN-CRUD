// Importing dependecies
import express from 'express';
import dotenv from 'dotenv';
import { connectToDb } from './config/connectToDb.js';
import { postRouter } from './src/routes/Post.js';

// Importing ENV variables
dotenv.config();
// Initializing the connection to database
connectToDb();

// Creating application level middleware
const app = express();

// Routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// Runing the server
app.listen(process.env.PORT, () =>
  console.log(`Running on PORT: ${process.env.PORT}`)
);
