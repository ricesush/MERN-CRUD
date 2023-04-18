// Importing dependecies
import {
  createPost,
  fetchPost,
  fetchPosts,
} from '../controllers/postControllers.js';
import express from 'express';

// creating router level middleware
const router = express.Router();

// Definging the routes

router.route('/').post(createPost).get(fetchPosts);
router.route('/:id').get(fetchPost);

export { router as postRouter };
