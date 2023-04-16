// Importing dependecies
import mongoose from 'mongoose';

// Definging the schema
const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// creating the model
export const Post = mongoose.model('Post', postSchema);
