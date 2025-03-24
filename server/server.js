const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;  // Aquí está el puerto que usará tu servidor

// Middleware para manejar JSON
app.use(express.json());

// Ruta para manejar solicitudes POST y guardar comentarios
app.post('/save-comment', (req, res) => {
    const newComment = req.body;

    // Leer comentarios existentes desde un archivo JSON
    const commentsFilePath = path.join(__dirname, 'comments.json');
    fs.readFile(commentsFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo de comentarios:', err);
            res.status(500).send('Error al guardar el comentario.');
            return;
        }

        const comments = JSON.parse(data || '[]');
        comments.push(newComment);

        // Guardar el nuevo comentario en el archivo JSON
        fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir en el archivo de comentarios:', err);
                res.status(500).send('Error al guardar el comentario.');
            } else {
                res.json({ message: 'Comentario guardado con éxito.' });
            }
        });
    });
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '..')));

// Iniciar servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
