import axios from 'axios';

export async function obtenerHistorial() {
    try {
        const response = await axios.get('http://localhost:8000/historial', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener el historial:', error);
    }
}

obtenerHistorial();