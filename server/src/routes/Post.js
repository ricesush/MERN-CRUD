import {
  createPost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/postController.js';
import express from 'express';

const router = express.Router();

router.route('/').post(createPost).get(getPosts);
router.route('/:id').get(getPost).put(updatePost);

export { router as postRoute };
