// Importing dependecies
import { Post } from '../models/post';

// Defining the controllers
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
