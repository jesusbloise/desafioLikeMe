// src/routes/postRoutes.js
const express = require('express');
const router = express.Router();
const {
    getPosts,
    createNewPost,
    likePost,
    deletePostById,
} = require('../controllers/postController');

router.get('/posts', getPosts);
router.post('/posts', createNewPost);
router.put('/posts/:id/like', likePost);
router.delete('/posts/:id', deletePostById);

module.exports = router;
