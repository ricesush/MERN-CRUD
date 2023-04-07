import express from 'express';
import {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postControllers.js';

const router = express.Router();

// app.use(express.json());

router.route('/').get(fetchPosts).post(createPost);
router.route('/:id').get(fetchPost).put(updatePost).delete(deletePost);

export default router;
