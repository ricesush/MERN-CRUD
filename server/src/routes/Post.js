// Importing dependecies
import express from 'express';
import { createPost } from '../controllers/postControllers.js';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost);

export { router as postRouter };
