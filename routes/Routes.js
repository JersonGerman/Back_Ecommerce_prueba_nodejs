const {clienteRouter, pedidoRouter, productoRouter} = require('./');

const routes = (app) => {
    app.use('/api/v1/clientes', clienteRouter);
    app.use('/api/v1/productos', productoRouter);
    app.use('/api/v1/pedidos', pedidoRouter);
    // app.use('/api/v1/usuarios', require('./usuarios'));
    // app.use('/api/v1/auth', require('./auth'));
}

module.exports = routes;