//  Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const postController = require('./controllers/postControllers');
const cors = require('cors');
const mongoose = require('mongoose');

// Create our version of API
const app = express();

// Middleware
app.use(express.json()); /* converting all our request to JSON file */
app.use(cors()); /*solving CORS issue when sending API request*/

// Connec to database
connectToDb();

// Routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.get('/posts', postController.fetchPosts);

app.get('/posts/:id', postController.fetchPost);

app.post('/posts', postController.createPost);

app.put('/posts/:id', postController.updatePost);

app.delete('/posts/:id', postController.deletePost);

// Start our server
app.listen(3000, () => console.log('Server Started!'));
