import { Post } from '../models/post.js';

export const createPost = async (req, res) => {
  const { author, title, content } = req.body;

  if (!author || !title || !content) {
    return res.json({ error: 'All fields are required' });
  }

  const post = await Post.create({
    author,
    title,
    content,
  });
};
