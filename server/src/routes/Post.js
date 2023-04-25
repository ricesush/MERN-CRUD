import { allPosts, createPost } from '../controllers/postController.js';
import express from 'express';

const router = express.Router();

router.route('/').post(createPost).get(allPosts);

export { router as postRouter };
