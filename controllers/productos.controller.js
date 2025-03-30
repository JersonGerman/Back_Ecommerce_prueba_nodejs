const {Producto} = require('../models/productos.model');
const {Response} = require('../lib/Response');

const response = new Response();


const obtenerProductos = async (req, res) => {
        const productos = await Producto.findAll();
        return response.success(res, productos);
}

const crearProducto = async (req, res) => {

    // Validar el cuerpo de la solicitud
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return response.error(res, 'Faltan datos requeridos', 400);
    }
    // Verificar si el producto ya existe
    const productoExistente = await Producto.findOne({ where: { nombre } });

    if (productoExistente) {
        return response.error(res, 'El producto ya existe', 400);
    }

    try {
        const producto = await Producto.create(req.body);
        return response.success(res, producto, 201);
        
    } catch (error) {
        // Manejar errores de validación o cualquier otro error
        if (error.name === 'SequelizeValidationError') {
            return response.error(res, error.errors[0].message, 400);
        }
        if (error.name === 'SequelizeUniqueConstraintError') {
            return response.error(res, 'El nombre del producto ya existe', 400);
        }
        // Otros errores
        console.error(error);
        return response.error(res, error.message, 500);
    }
}

const obtenerProductoPorId = async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
        return response.error(res, 'Producto no encontrado', 404);
    }
    return response.success(res, producto);
}

const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio } = req.body;
    const producto = await Producto.findByPk(id);
    if (!producto) {
        return response.error(res, 'Producto no encontrado', 404);
    }
    try {
        await producto.update({ nombre, precio });
        return response.success(res, producto);
    } catch (error) {
        return response.error(res, error.message, 500);
    }
}

const eliminarProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
        return response.error(res, 'Producto no encontrado', 404);
    }
    try {
        await producto.destroy();
        return response.success(res, 'Producto eliminado correctamente');
    } catch (error) {
        return response.error(res, error.message, 500);
    }
}


module.exports = {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
}