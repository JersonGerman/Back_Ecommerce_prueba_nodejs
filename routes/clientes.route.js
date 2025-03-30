const express = require('express');
const router = express.Router();


const { 
    crearClientes, 
    obtenerClientes, 
    obtenerClientePorId, 
    actualizarCliente, 
    eliminarCliente 
} = require('../controllers/clientes.controller.js');


// Rutas para clientes
router.post('/', crearClientes); // Crear cliente
router.get('/', obtenerClientes); // Obtener todos los clientes 
router.get('/:id', obtenerClientePorId); // Obtener cliente por ID
router.patch('/:id', actualizarCliente); // Actualizar cliente por ID 
router.delete('/:id', eliminarCliente); // Eliminar cliente por ID

module.exports = {
    clienteRouter: router
};