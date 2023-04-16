// Importing dependecies
import express from 'express';
import { createPost, fetchPosts } from '../controllers/postControllers.js';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost).get(fetchPosts);

export { router as postRouter };
