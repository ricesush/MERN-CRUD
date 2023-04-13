// Importing dependecies
import {
  createPost,
  fetchPost,
  fetchPosts,
} from '../controllers/postControllers.js';
import express from 'express';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost).get(fetchPosts);
router.route('/:id').get(fetchPost);

// exporting routes
export { router as postRoute };
