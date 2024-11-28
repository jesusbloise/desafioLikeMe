const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000; 


app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


app.get("/posts", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM posts");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los posts");
    }
});


app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
            [titulo, url, descripcion]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el post");
    }
});


app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM posts WHERE id = $1", [id]);
        res.send("Post eliminado");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el post");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
