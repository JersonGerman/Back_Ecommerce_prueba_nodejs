const express = require('express');

const router = express.Router();


const { 
    crearProducto, 
    obtenerProductos, 
    obtenerProductoPorId, 
    actualizarProducto, 
    eliminarProducto 
} = require('../controllers/productos.controller');


// Rutas para productos
router.post('/', crearProducto); // Crear producto
router.get('/', obtenerProductos); // Obtener todos los productos   
router.get('/:id', obtenerProductoPorId); // Obtener producto por ID
router.patch('/:id', actualizarProducto); // Actualizar producto por ID
router.delete('/:id', eliminarProducto); // Eliminar producto por ID

module.exports = {
    productoRouter: router
};

