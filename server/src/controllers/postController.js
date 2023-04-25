import { Post } from '../models/post.js';

export const allPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) {
    return res.kson({ msg: 'No post found!' });
  }

  res.json(posts);
};

export const createPost = async (req, res) => {
  const { author, title, content } = req.body;

  if (!author || !title || !content) {
    return res.json({ err: `All fields are required!` });
  }

  try {
    const post = await Post.create({
      author,
      title,
      content,
    });

    res.json({ msg: `Successfully created the post!` });
  } catch (error) {
    console.log(error);
  }
};
