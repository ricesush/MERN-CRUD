import Post from '../models/post.js';

export const createPost = async (req, res) => {
  const { author, title, content } = req.body;

  const post = await Post.create({
    author,
    title,
    content,
  });

  res.json({ msg: `Post has been successfully created!` });
};

export const getPosts = async (req, res) => {
  const post = await Post.find();

  res.json({ post });
};
