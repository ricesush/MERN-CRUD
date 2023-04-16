// importing dependecies
import { Post } from '../models/post';

// Defining the controllers
const createPost = async (req, res) => {
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
