import { Post } from '../models/post.js';

export const createPost = async (req, res) => {
  try {
    const { author, title, content } = req.body;

    if (!author || !title || !content) {
      return res.json({ error: 'All fields are required' });
    }

    const post = await Post.create({
      author,
      title,
      content,
    });

    res.status(201).json({ post });
  } catch (error) {
    res.status(500).json({ error: err.mesage });
  }
};
