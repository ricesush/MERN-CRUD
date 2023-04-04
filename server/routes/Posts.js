const express = require('express');
const router = express.Router();
const {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postControllers');

const app = express();

app.use(express.json());

router.route('/').get(fetchPosts).post(createPost);
router.route('/:id').get(fetchPost).put(updatePost).delete(deletePost);

module.exports = router;
