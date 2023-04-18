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
