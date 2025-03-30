const {Pedido} = require('../models/pedidos.model');
const {Producto} = require('../models/productos.model');
const {Cliente} = require('../models/clientes.model');
const {ProductosxPedido} = require('../models/productosxPedido.model');

const {Response} = require('../lib/Response');


const response = new Response();

const obtenerPedidos = async (req, res) => {
        const pedidos = await Pedido.findAll({
            attributes: ['id', 'total', 'estado', 'fecha_pedido'],
        });
        return response.success(res, pedidos);
}

const crearPedido = async (req, res) => {
    try {
        const { clienteId, productos } = req.body;

        if (!clienteId || !productos || productos.length === 0) {
            return response.error(res,'Cliente y productos son requeridos', 400);   
        }
        const cliente = await Cliente.findByPk(clienteId);
        if (!cliente) {
            return response.error(res, 'Cliente no encontrado', 404);
        }
        
        let total = 0;
        for (let prod of productos) {
            const producto = await Producto.findByPk(prod.id);
            if (!producto) {
                return response.error(res,`Producto con ID ${prod.id} no encontrado`, 404);
            }
            total += producto.precio * prod.cantidad;
        }

        if (total <= 0) {
            return response.error(res, 'El total del pedido debe ser mayor a 0', 400);
        }

        // validar si el cliente tiene un pedido pendiente
        const pedidoExistente = await Pedido.findOne({ where: { ClienteId: clienteId, estado: 'pendiente' } });
        if (pedidoExistente) {
            // actualizar el pedido existente
            await pedidoExistente.update({ total });
            await ProductosxPedido.destroy({ where: { PedidoId: pedidoExistente.id } });
            for (let prod of productos) {
                await ProductosxPedido.create({ PedidoId: pedidoExistente.id, ProductoId: prod.id, cantidad: prod.cantidad });
            }
            return response.success(res, 'Pedido actualizado exitosamente', 200, pedidoExistente);
        }

        // Crear el pedido
        const pedido = await Pedido.create({ ClienteId: clienteId, total, estado: 'pendiente' });

        for (let prod of productos) {
            const  producto = await ProductosxPedido.create({PedidoId: pedido.id, ProductoId: prod.id, cantidad: prod.cantidad});
        }
        res.status(201).json({ message: 'Pedido creado exitosamente', pedido });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
}

const obtenerPedidoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id, { 
            attributes: ['id', 'total', 'estado', 'fecha_pedido'],
            include: [
                {
                    model: Producto,
                    through: { attributes: ['cantidad'] },
                    attributes: ['id', 'nombre', 'precio']
                },
            ]
        });
        if (!pedido) {
            return response.error(res,'Pedido no encontrado', 404);
        }
        return response.success(res, pedido);
    } catch (error) {
        return response.error(res,'Error al obtener el pedido', 500);
    }
}

const actualizarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { clienteId, productos } = req.body;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return response.error(res,'Pedido no encontrado', 404);
        }
        await ProductosxPedido.destroy({ where: { pedidoId: id } });
        for (let prod of productos) {
            await ProductosxPedido.create({ PedidoId: id, ProductoId: prod.id, cantidad: prod.cantidad });
        }
        return response.success(res, 'Pedido actualizado exitosamente');
    } catch (error) {
        return response.error(res,'Error al actualizar el pedido');
    }
}

const eliminarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return response.error(res,'Pedido no encontrado', 404);
        }
        await pedido.destroy();
        return response.success(res, 'Pedido eliminado exitosamente');
    } catch (error) {
        return response.error(res,'Error al eliminar el pedido');
    }
}

module.exports = {
    obtenerPedidos,
    crearPedido,
    obtenerPedidoPorId,
    actualizarPedido,
    eliminarPedido
}
// Compare this snippet from routes/pedido.routes.js: