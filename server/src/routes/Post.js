import express from 'express';
import { createPost } from '../controllers/postController.js';

const router = express.Router();

router.route('/').post(createPost);

export { router as postRoute };
