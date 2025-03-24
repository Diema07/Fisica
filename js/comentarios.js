document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('commentForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        // Obtener la URL de la página actual
        const pageURL = window.location.href;

        const newComment = {
            username: username,
            comment: comment,
            page: pageURL,  // Agregar la URL de la página actual
            timestamp: new Date().toLocaleString()
        };

        // Enviar el comentario al servidor
        fetch('/save-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Comentario enviado con éxito:', data);
        })
        .catch(error => console.error('Error:', error));

        // Limpiar el formulario
        document.getElementById('commentForm').reset();
    });
});
