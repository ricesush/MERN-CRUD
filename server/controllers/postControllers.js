const Post = require('../models/post');

const fetchPosts = async (req, res) => {
  // Find the notes
  const posts = await Post.find();

  // Respond with them
  res.json({ posts: posts });
};

const fetchPost = async (req, res) => {
  // Get id off the url
  const postId = req.params.id;

  // Find the note using that id
  const post = await Post.findById(postId);

  // Respond with the post
  res.json({ posts: post });
};

const createPost = async (req, res) => {
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
};

const updatePost = async (req, res) => {
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
};

const deletePost = async (req, res) => {
  // get id url
  const postId = req.params.id;

  try {
    await Post.findByIdAndDelete(postId);
  } catch (e) {
    return console.log(e);
  }

  // respond
  res.json({ success: 'Succesfully deleted the post' });
};

module.exports = {
  fetchPosts: fetchPosts,
  fetchPost: fetchPost,
  createPost: createPost,
  updatePost: updatePost,
  deletePost: deletePost,
};
