import { createPost } from '../controllers/postController.js';
import express from 'express';

const router = express.Router();

router.route('/').post(createPost);

export { router as postRoute };
