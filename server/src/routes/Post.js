// Importing dependecies
import express from 'express';
import { createPost } from '../controllers/postControllers';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost);

export { router as postRouter };
