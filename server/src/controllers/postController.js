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
  const posts = await Post.find();

  res.json({ posts });
};

export const getPost = async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findById(postId);

  res.json({ post });
};
