import axios from 'axios';

const API_URL = 'http://localhost:8000/ingreso';

// Función para registrar un ingreso
export const registrarIngreso = async (ingresoData) => {
    try {
        const response = await axios.post(API_URL, ingresoData);
        return response.data;
    } catch (error) {
        console.error('Error al registrar el ingreso:', error);
        throw error;
    }
};

// Función para obtener todos los ingresos
export const obtenerIngresos = async () => {
    try {
        const response = await axios.get(`${API_URL}s`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los ingresos:', error);
        throw error;
    }
};

// Función para obtener un ingreso por ID
export const obtenerIngresoPorId = async (ingresoId) => {
    try {
        const response = await axios.get(`${API_URL}/${ingresoId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el ingreso:', error);
        throw error;
    }
};

// Función para actualizar un ingreso
export const actualizarIngreso = async (ingresoId, ingresoData) => {
    try {
        const response = await axios.put(`${API_URL}/${ingresoId}`, ingresoData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el ingreso:', error);
        throw error;
    }
};

// Función para eliminar un ingreso
export const eliminarIngreso = async (ingresoId) => {
    try {
        const response = await axios.delete(`${API_URL}/${ingresoId}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el ingreso:', error);
        throw error;
    }
};
