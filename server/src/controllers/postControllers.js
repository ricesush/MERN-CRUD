// Importing dependecies
import Post from '../models/post.js';

// Defining the controllers

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
