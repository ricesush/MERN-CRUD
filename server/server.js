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

app.get('/posts', async (req, res) => {
  // Find the notes
  const posts = await Post.find();

  // Respond with them
  res.json({ posts: posts });
});

app.get('/posts/:id', async (req, res) => {
  // Get id off the url
  const postId = req.params.id;

  // Find the note using that id
  const post = await Post.findById(postId);

  // Respond with the post
  res.json({ posts: post });
});

app.post('/posts', async (req, res) => {
  // Get the sent in data off request body
  const title = req.body.title;
  const content = req.body.content;

  // Create a post
  const post = await Post.create({
    title: title,
    content: content,
  });

  // respond with the post
  res.json({ post: post });
});

app.put('/posts/:id', async (req, res) => {
  // Get the id
  const postId = req.params.id;

  // Get the data off the request body
  const title = req.body.title;
  const content = req.body.content;

  // find and update the record
  await Post.findByIdAndUpdate(postId, {
    title: title,
    content: content,
  });

  // find updated post
  const post = await Post.findById(postId);

  res.json({ post: post });
});

// Start our server
app.listen(process.env.PORT);
