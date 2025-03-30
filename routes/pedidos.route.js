const express = require('express');

const router = express.Router();


const {
    crearPedido,
    obtenerPedidos,
    obtenerPedidoPorId,
    actualizarPedido,
    eliminarPedido
} = require('../controllers/pedidos.controller.js');

// const { validarToken } = require('../middlewares/validarToken.js');
// const { validarAdmin } = require('../middlewares/validarAdmin.js');

// const { validarCliente } = require('../middlewares/validarCliente.js');
// const { validarProducto } = require('../middlewares/validarProducto.js');
// const { validarPedido } = require('../middlewares/validarPedido.js');
// const { validarPedidoId } = require('../middlewares/validarPedidoId.js');
// const { validarProductoId } = require('../middlewares/validarProductoId.js');
// const { validarClienteId } = require('../middlewares/validarClienteId.js');
// const { validarCantidad } = require('../middlewares/validarCantidad.js');
// const { validarCampos } = require('../middlewares/validarCampos.js');
// const { validarExistencia } = require('../middlewares/validarExistencia.js');
// const { validarExistenciaPedido } = require('../middlewares/validarExistenciaPedido.js');
// const { validarExistenciaProducto } = require('../middlewares/validarExistenciaProducto.js');
// const { validarExistenciaCliente } = require('../middlewares/validarExistenciaCliente.js');
// const { validarExistenciaCantidad } = require('../middlewares/validarExistenciaCantidad.js');
// const { validarExistenciaClientePedido } = require('../middlewares/validarExistenciaClientePedido.js');
// const { validarExistenciaProductoPedido } = require('../middlewares/validarExistenciaProductoPedido.js');
// const { validarExistenciaCantidadPedido } = require('../middlewares/validarExistenciaCantidadPedido.js');
// const { validarExistenciaPedidoId } = require('../middlewares/validarExistenciaPedidoId.js');
// const { validarExistenciaProductoId } = require('../middlewares/validarExistenciaProductoId.js');
// const { validarExistenciaClienteId } = require('../middlewares/validarExistenciaClienteId.js');
// const { validarExistenciaCantidadId } = require('../middlewares/validarExistenciaCantidadId.js');
// const { validarExistenciaPedidoCliente } = require('../middlewares/validarExistenciaPedidoCliente.js');
// const { validarExistenciaPedidoProducto } = require('../middlewares/validarExistenciaPedidoProducto.js');
// const { validarExistenciaPedidoCantidad } = require('../middlewares/validarExistenciaPedidoCantidad.js');
// const { validarExistenciaPedidoClienteId } = require('../middlewares/validarExistenciaPedidoClienteId.js');
// const { validarExistenciaPedidoProductoId } = require('../middlewares/validarExistenciaPedidoProductoId.js');
// const { validarExistenciaPedidoCantidadId } = require('../middlewares/validarExistenciaPedidoCantidadId.js');
// const { validarExistenciaPedidoClienteId } = require('../middlewares/validarExistenciaPedidoClienteId.js');
// const { validarExistenciaPedidoProductoId } = require('../middlewares/validarExistenciaPedidoProductoId.js');
// const { validarExistenciaPedidoCantidadId } = require('../middlewares/validarExistenciaPedidoCantidadId.js');
// const { validarExistenciaPedidoClienteProducto } = require('../middlewares/validarExistenciaPedidoClienteProducto.js');
// const { validarExistenciaPedidoClienteCantidad } = require('../middlewares/validarExistenciaPedidoClienteCantidad.js');
// const { validarExistenciaPedidoProductoCantidad } = require('../middlewares/validarExistenciaPedidoProductoCantidad.js');
// const { validarExistenciaPedidoClienteProductoId } = require('../middlewares/validarExistenciaPedidoClienteProductoId.js');
// const { validarExistenciaPedidoClienteCantidadId } = require('../middlewares/validarExistenciaPedidoClienteCantidadId.js');
// const { validarExistenciaPedidoProductoCantidadId } = require('../middlewares/validarExistenciaPedidoProductoCantidadId.js');
// const { validarExistenciaPedidoClienteProductoCantidad } = require('../middlewares/validarExistenciaPedidoClienteProductoCantidad.js');
// const { validarExistenciaPedidoClienteProductoCantidadId } = require('../middlewares/validarExistenciaPedidoClienteProductoCantidadId.js');

router.get('/', obtenerPedidos); // Obtener todos los pedidos
router.post('/', crearPedido); // Crear pedido
router.get('/:id', obtenerPedidoPorId); // Obtener pedido por ID
router.patch('/:id', actualizarPedido); // Actualizar pedido por ID
router.delete('/:id', eliminarPedido); // Eliminar pedido por ID

module.exports = {
    pedidoRouter: router
};