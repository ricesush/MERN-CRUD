if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const port = process.env.PORT;

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

app
  .route('/posts')
  .get(postController.fetchPosts)
  .post(postController.createPost);

app
  .route('/posts/:id')
  .get(postController.fetchPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

// Start our server
app.listen(port, () => console.log(`Server started running on port ${port}!`));
