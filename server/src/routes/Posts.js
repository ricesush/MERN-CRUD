// Importing dependecies
import { createPost, fetchPosts } from '../controllers/postControllers.js';
import express from 'express';

// creating router level middleware
const router = express.Router();

// Definging the routes

router.route('/').post(createPost).get(fetchPosts);

export { router as postRouter };
