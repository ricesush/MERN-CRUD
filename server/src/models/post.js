import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    title: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    content: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model('Post', postSchema);
