import {
  allPosts,
  createPost,
  singlePost,
  updatePost,
} from '../controllers/postController.js';
import express from 'express';

const router = express.Router();

router.route('/').post(createPost).get(allPosts);
router.route('/:id').get(singlePost).put(updatePost);

export { router as postRouter };
