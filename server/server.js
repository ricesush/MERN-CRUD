import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

//  Import dependencies
import express from 'express';
import connectToDb from './config/connectToDb.js';
import cors from 'cors';
// const mongoose = require('mongoose');
import postRoute from './routes/Posts.js';

// Create our version of API
const app = express();

// Establishing connection to database/mongoDB
connectToDb();

// Middleware
/* Handles API / JSON request, converting to actual objects */
app.use(express.json());
app.use(cors()); /*solving CORS issue when sending API request*/

// Handles root
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// defines the common path for Posts route: postRoute
app.use('/posts', postRoute);

// Start our server
app.listen(port, () => console.log(`Server started running on port ${port}!`));
