import axios from 'axios';

const API_URL = 'http://localhost:8000/usuario';

// Función para registrar un usuario
export const registrarUsuario = async (usuarioData) => {
    try {
        const response = await axios.post(API_URL, usuarioData);
        return response.data;
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw error;
    }
};

// Función para obtener todos los usuarios
export const obtenerUsuarios = async () => {
    try {
        const response = await axios.get(`${API_URL}s`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
};

// Función para obtener un usuario por ID
export const obtenerUsuarioPorId = async (usuarioId) => {
    try {
        const response = await axios.get(`${API_URL}/${usuarioId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        throw error;
    }
};

// Función para actualizar un usuario
export const actualizarUsuario = async (usuarioId, usuarioData) => {
    try {
        const response = await axios.put(`${API_URL}/${usuarioId}`, usuarioData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        throw error;
    }
};

// Función para eliminar un usuario
export const eliminarUsuario = async (usuarioId) => {
    try {
        const response = await axios.delete(`${API_URL}/${usuarioId}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
};
