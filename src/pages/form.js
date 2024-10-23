

// Función para registrar un usuario
async function registrarUsuario(data) {
    const response = await fetch('http://localhost:8000/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

