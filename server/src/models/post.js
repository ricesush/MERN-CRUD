// Importing dependecies
import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

// Defining the Schema
const PostSchema = new mongoose.Schema(
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
  {
    timestamps: true,
  }
);

// Creating the model
export const Post = mongoose.model('Post', PostSchema);
