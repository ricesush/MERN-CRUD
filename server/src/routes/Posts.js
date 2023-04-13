// Importing dependecies
import { createPost, fetchPosts } from '../controllers/postControllers.js';
import express from 'express';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost).get(fetchPosts);

// exporting routes
export { router as postRoute };
