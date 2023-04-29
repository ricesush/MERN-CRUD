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

export const updatePost = async (req, res) => {
  const postId = req.params.id;

  const { author, title, content } = req.body;

  const post = await Post.findByIdAndUpdate(postId, {
    author,
    title,
    content,
  });

  const updatedPost = await Post.findById(postId);

  res.json({ updatedPost });
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findByIdAndDelete(postId);

  res.json({ msg: `Successfully deleted the post` });
};
