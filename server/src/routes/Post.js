import {
  createPost,
  getPost,
  getPosts,
} from '../controllers/postController.js';
import express from 'express';

const router = express.Router();

router.route('/').post(createPost).get(getPosts);
router.route('/:id').get(getPost);

export { router as postRoute };
