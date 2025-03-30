const { Cliente } = require('./clientes.model');
const { Pedido } = require('../models/pedidos.model');
const { Producto } = require('../models/productos.model');
const { ProductosxPedido } = require('../models/productosxpedido.model');

module.exports = {
    Cliente,
    Pedido,
    Producto,
    ProductosxPedido
}