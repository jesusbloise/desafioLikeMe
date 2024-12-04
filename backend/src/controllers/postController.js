// src/controllers/postController.js
const { getAllPosts, createPost, incrementLikes, deletePost } = require('../models/postModel');
const errorMessages = require('../helpers/errorMessages');

const getPosts = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: errorMessages.GENERAL_SERVER_ERROR });
    }
};

const createNewPost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;

    if (!titulo || !img || !descripcion) {
        return res.status(400).json({ error: errorMessages.MISSING_FIELDS });
    }

    try {
        const post = await createPost(titulo, img, descripcion);
        res.status(201).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: errorMessages.CREATE_POST_ERROR });
    }
};

const likePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await incrementLikes(id);
        res.json(post);
    } catch (error) {
        console.error(error.message);
        if (error.message === 'Post no encontrado') {
            res.status(404).json({ error: errorMessages.POST_NOT_FOUND });
        } else {
            res.status(500).json({ error: errorMessages.INCREMENT_LIKES_ERROR });
        }
    }
};

const deletePostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await deletePost(id);
        res.json({ message: 'Post eliminado con éxito', post });
    } catch (error) {
        console.error(error.message);
        if (error.message === 'Post no encontrado') {
            res.status(404).json({ error: errorMessages.POST_NOT_FOUND });
        } else {
            res.status(500).json({ error: errorMessages.DELETE_POST_ERROR });
        }
    }
};

module.exports = {
    getPosts,
    createNewPost,
    likePost,
    deletePostById,
};
