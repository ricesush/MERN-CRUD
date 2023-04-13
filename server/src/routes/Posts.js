// Importing dependecies
import {
  createPost,
  deletePost,
  fetchPost,
  fetchPosts,
  updatePost,
} from '../controllers/postControllers.js';
import express from 'express';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost).get(fetchPosts);
router.route('/:id').get(fetchPost).put(updatePost).delete(deletePost);

// exporting routes
export { router as postRoute };
