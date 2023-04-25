import { Post } from '../models/post.js';

export const allPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts.length) {
    return res.json({ msg: 'No post found!' });
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

export const singlePost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    res.json(post);
  } catch (error) {
    res.json({ err: "Didn't find that post" });
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  const postId = req.params.id;

  const { author, title, content } = req.body;

  if (!author || !title || !content) {
    return res.json({ msg: 'All fiields are required!' });
  }

  try {
    const post = await Post.findByIdAndUpdate(postId, {
      author,
      title,
      content,
    });

    res.json({ msg: 'Succesfully updated the post!' });
  } catch (error) {
    res.json({ err: 'Failed to update the post!' });
    console.log({ error });
  }
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findByIdAndDelete(postId);
    res.json({ msg: 'Successfully deleted the post!' });
  } catch (error) {
    res.json({ err: 'Unable to delete the post!' });
    console.log(error);
  }
};
