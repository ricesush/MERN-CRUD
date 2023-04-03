if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const port = process.env.PORT;

//  Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoute = require('./routes/Posts');

// Create our version of API
const app = express();

// Middleware
/* Handles API / JSON request, converting to actual objects */
app.use(express.json());
app.use(cors()); /*solving CORS issue when sending API request*/

// defines the common path for Posts route: postRoute
app.use('/posts', postRoute);

// Connect to database
connectToDb();

// Handles root
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// Start our server
app.listen(port, () => console.log(`Server started running on port ${port}!`));
