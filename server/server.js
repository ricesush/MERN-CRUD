// Importing dependecies
import express from 'express';
import dotenv from 'dotenv';
import { ConnectToDb } from './config/connectToDb.js';
import { postRoute } from './src/routes/Posts.js';

// importing ENV variables
dotenv.config();

// Starting the Connection to Db
ConnectToDb();

// Creating application level middleware
const app = express();

// Converting API request to JSON
app.use(express.json());

// Routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.use('/posts', postRoute);

// Starting the server

app.listen(process.env.PORT, () =>
  console.log(`Running on Port ${process.env.PORT}`)
);
