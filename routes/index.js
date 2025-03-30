const {clienteRouter} = require('./clientes.route');
const {productoRouter} = require('./productos.route');

const {pedidoRouter} = require('./pedidos.route');
// const {productosxPedidoRouter} = require('./productosxPedido.route.js');

// const {usuarioRouter} = require('./usuarios.route.js');
// const {authRouter} = require('./auth.route.js');
// const {authMiddleware} = require('../middlewares/auth.middleware.js');
// const {authAdminMiddleware} = require('../middlewares/authAdmin.middleware.js');

// const {authAdminOrUserMiddleware} = require('../middlewares/authAdminOrUser.middleware.js');
// const {authAdminOrUserOrGuestMiddleware} = require('../middlewares/authAdminOrUserOrGuest.middleware.js');

module.exports = {
    clienteRouter,
    productoRouter,
    pedidoRouter,
    // productosxPedidoRouter,
    // usuarioRouter,
    // authRouter,
    // authMiddleware,
    // authAdminMiddleware,
    // authAdminOrUserMiddleware,
    // authAdminOrUserOrGuestMiddleware
};