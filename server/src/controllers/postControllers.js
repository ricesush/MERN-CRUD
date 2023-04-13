// Importing dependecies
import Post from '../models/post.js';

// Defining the controllers

export const fetchPosts = async (req, res) => {
  // fetching the posts
  const post = await Post.find();

  //   responding in JSOn with all the posts
  res.json({ post });
};

export const createPost = async (req, res) => {
  // getting data from the req body
  const { author, content } = req.body;

  //   creating the post
  const post = await Post.create({
    author: author,
    content: content,
  });

  //  Responding with the created caht
  res.json({ post });
};

export const fetchPost = async (req, res) => {
  // Getting the ID
  const postId = req.params.id;

  //   fetching the post
  const post = await Post.findById(postId);

  //   responding JSOn with fetched post
  res.json({ post });
};

export const updatePost = async (req, res) => {
  // getting the ID
  const postId = req.params.id;

  //   destructuring the data from the body
  const { author, content } = req.body;

  //   finding the post by ID and updateing
  const post = await Post.findByIdAndUpdate(postId, {
    author: author,
    content: content,
  });

  // fetching the updated post
  const updatedPost = await Post.findById(postId);

  //   responding with JSON
  res.json({ updatedPost });
};
