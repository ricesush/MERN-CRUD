import { createPost, getPosts } from '../controllers/postController.js';
import express from 'express';

const router = express.Router();

router.route('/').post(createPost).get(getPosts);

export { router as postRoute };
