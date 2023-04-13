// Importing dependecies
import { createPost } from '../controllers/postControllers.js';
import express from 'express';

// creating router level middleware
const router = express.Router();

// Defining the routes
router.route('/').post(createPost);

// exporting routes
export { router as postRoute };
