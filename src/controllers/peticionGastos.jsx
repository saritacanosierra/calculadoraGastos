import axios from 'axios';

const API_URL = 'http://localhost:8000/gasto';

// Función para registrar un gasto
export const registrarGasto = async (gastoData) => {
    try {
        const response = await axios.post(API_URL, gastoData);
        return response.data;
    } catch (error) {
        console.error('Error al registrar el gasto:', error);
        throw error;
    }
};

// Función para obtener todos los gastos
export const obtenerGastos = async () => {
    try {
        const response = await axios.get(`${API_URL}s`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los gastos:', error);
        throw error;
    }
};

// Función para obtener un gasto por ID
export const obtenerGastoPorId = async (gastoId) => {
    try {
        const response = await axios.get(`${API_URL}/${gastoId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el gasto:', error);
        throw error;
    }
};

// Función para actualizar un gasto
export const actualizarGasto = async (gastoId, gastoData) => {
    try {
        const response = await axios.put(`${API_URL}/${gastoId}`, gastoData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el gasto:', error);
        throw error;
    }
};

// Función para eliminar un gasto
export const eliminarGasto = async (gastoId) => {
    try {
        const response = await axios.delete(`${API_URL}/${gastoId}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el gasto:', error);
        throw error;
    }
};
