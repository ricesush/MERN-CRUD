import express from 'express';
import { createPost } from '../controllers/postController';

const router = express.Router();

router.route('/').post(createPost);

export { router as postRoute };
