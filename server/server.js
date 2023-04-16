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

// converting API requests to JSON file
app.use(express.json());

// Routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.use('/posts', postRouter);

// Runing the server
app.listen(process.env.PORT, () =>
  console.log(`Running on PORT: ${process.env.PORT}`)
);
