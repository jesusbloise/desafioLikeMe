// src/models/postModel.js
const pool = require('../config/db');

const getAllPosts = async () => {
    try {
        const result = await pool.query('SELECT * FROM posts');
        return result.rows;
    } catch (error) {
        throw new Error('Error al obtener los posts');
    }
};

const createPost = async (titulo, img, descripcion) => {
    try {
        const result = await pool.query(
            'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *',
            [titulo, img, descripcion]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error('Error al crear el post');
    }
};

const incrementLikes = async (id) => {
    try {
        const result = await pool.query(
            'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) {
            throw new Error('Post no encontrado');
        }
        return result.rows[0];
    } catch (error) {
        throw new Error('Error al incrementar likes');
    }
};

const deletePost = async (id) => {
    try {
        const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            throw new Error('Post no encontrado');
        }
        return result.rows[0];
    } catch (error) {
        throw new Error('Error al eliminar el post');
    }
};

module.exports = {
    getAllPosts,
    createPost,
    incrementLikes,
    deletePost,
};
