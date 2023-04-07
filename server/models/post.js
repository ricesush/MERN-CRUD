import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'Please add a title'],
  },
  content: {
    type: String,
    require: [true, 'Please add the content'],
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
