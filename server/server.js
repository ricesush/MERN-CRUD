// Load env variables
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

//  Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const postController = require('./controllers/postControllers');

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

app.get('/posts', postController.fetchPosts);

app.get('/posts/:id', postController.fetchPost);

app.post('/posts', postController.createPost);

app.put('/posts/:id', postController.updatePost);

app.delete('/posts/:id', postController.deletePost);

// Start our server
app.listen(process.env.PORT);
