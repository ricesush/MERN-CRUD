// importing dependecies
import { Post } from '../models/post.js';

// Defining the controllers
export const fetchPosts = async (req, res) => {
  // fetching all the post
  const posts = await Post.find();

  //   responding with the json file
  res.json({ posts });
};

export const createPost = async (req, res) => {
  // destructuring the data from req.body
  const { author, content } = req.body;

  // creating the post
  const post = await Post.create({
    author,
    content,
  });

  //   responding JSON file with the
  res.json({ post });
};

export const fetchPost = async (req, res) => {
  // getting the ID
  const postId = req.params.id;

  //   finding the post with the id
  const post = await Post.findById(postId);

  //   responding with the json file
  res.json({ post });
};
