import { createPost } from '../controllers/postController';
import express from 'express';

const router = express.Router();

router.route('/').post(createPost);

export { router as postRouter };
