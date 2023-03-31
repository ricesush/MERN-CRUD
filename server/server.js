// Load env variables
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

//  Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const Post = require('./models/post');

// Create an express app
const app = express();

// Configure express app
app.use(express.json());

// Connec to database
connectToDb();

// Routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.get('/posts');

app.get('/posts/:id');

app.post('/posts');

app.put('/posts/:id');

app.delete('/posts/:id');

// Start our server
app.listen(process.env.PORT);
