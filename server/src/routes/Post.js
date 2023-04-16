// Importing dependecies
import express from 'express';
import {
  createPost,
  fetchPost,
  fetchPosts,
  updatePost,
} from '../controllers/postControllers.js';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost).get(fetchPosts);
router.route('/:id').get(fetchPost).put(updatePost);

export { router as postRouter };
