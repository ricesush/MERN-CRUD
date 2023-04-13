// Importing dependecies
import mongoose from 'mongoose';

// Defining the Schema

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

// Definign the model
const Post = mongoose.model('Post', PostSchema);

// exporting the model
export default Post;
