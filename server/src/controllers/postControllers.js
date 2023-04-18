// Importing dependecies
import { Post } from '../models/post.js';

// Defining the controllers
export const fetchPosts = async (req, res) => {
  const posts = await Post.find();

  res.json({ posts });
};

export const createPost = async (req, res) => {
  // destructuring req.body
  const { author, content } = req.body;

  //   creating the post
  const post = await Post.create({
    author,
    content,
  });

  //   responding with the json file
  res.json({ post });
};

export const fetchPost = async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findById(postId);

  res.json({ post });
};

export const updatePost = async (req, res) => {
  const postId = req.params.id;

  const { author, content } = req.body;

  const post = await Post.findByIdAndUpdate(postId, {
    author,
    content,
  });

  const updatedPost = await Post.findById(postId);

  res.json({ updatedPost });
};
