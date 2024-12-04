// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { Pool } = require("pg");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Configuración de middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // Configuración de la conexión a la base de datos
// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// });

// // Ruta GET para obtener todos los posts
// app.get("/posts", async (req, res) => {
//     try {
//         const result = await pool.query("SELECT * FROM posts");
//         res.json(result.rows);
//     } catch (error) {
//         console.error("Error al obtener los posts:", error.message);
//         res.status(500).json({ error: "Error al obtener los posts" });
//     }
// });

// // Ruta POST para agregar un nuevo post
// app.post("/posts", async (req, res) => {
//     const { titulo, img, descripcion } = req.body; // Asegúrate de que la propiedad es 'img'
//     console.log("URL recibida para la imagen:", img);
//     if (!titulo || !img || !descripcion) {
//         return res.status(400).json({ error: "Todos los campos son obligatorios" });
//     }

//     try {
//         const result = await pool.query(
//             "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
//             [titulo, img, descripcion]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.error("Error al crear el post:", error.message);
//         res.status(500).json({ error: "Error al crear el post" });
//     }
// });

// // Ruta PUT para incrementar likes
// // Ruta PUT para incrementar likes
// app.put("/posts/:id/like", async (req, res) => {
//     const { id } = req.params;
//     if (!id) {
//         return res.status(400).send("ID no válido");
//     }
//     try {
//         const result = await pool.query(
//             "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
//             [id]
//         );
//         if (result.rows.length === 0) {
//             return res.status(404).send("Post no encontrado");
//         }
//         res.json(result.rows[0]);
//     } catch (error) {
//         console.error("Error al incrementar likes:", error);
//         res.status(500).send("Error al incrementar likes");
//     }
// });


// // Ruta DELETE para eliminar un post
// app.delete("/posts/:id", async (req, res) => {
//     const { id } = req.params;

//     if (!id) {
//         return res.status(400).json({ error: "ID del post es obligatorio" });
//     }

//     try {
//         const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

//         if (result.rows.length === 0) {
//             return res.status(404).json({ error: "Post no encontrado" });
//         }

//         res.json({ message: "Post eliminado con éxito", post: result.rows[0] });
//     } catch (error) {
//         console.error("Error al eliminar el post:", error.message);
//         res.status(500).json({ error: "Error al eliminar el post" });
//     }
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
