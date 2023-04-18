// Importing dependecies
import { createPost } from '../controllers/postControllers';
import express from 'express';

// creating router level middleware
const router = express.Router();

// Definging the routes

router.route('/').post(createPost);

export { router as postRouter };
