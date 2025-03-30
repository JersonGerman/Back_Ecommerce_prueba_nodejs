const {app} = require('./app');
const {Console,log, error, success} = require('./lib/Console');

// Models
const{ Cliente, Pedido, Producto, ProductosxPedido } = require('./models');

// Utils
const { sequelize } = require('./utils/database');

const console = new Console('SERVER');

// Autenticación de la base de datos
sequelize.authenticate()
    .then(() => console.success('Conexión a la base de datos establecida correctamente'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

Cliente.hasMany(Pedido);
Pedido.belongsTo(Cliente);

Pedido.belongsToMany(Producto, { through: ProductosxPedido, foreignKey: 'PedidoId' });
Producto.belongsToMany(Pedido, { through: ProductosxPedido, foreignKey: 'ProductoId' });

// Sincronización de la base de datos
sequelize.sync({ force: false })
    .then(() => console.success('Base de datos sincronizada'))
    .catch(err => console.error(`Error al sincronizar la base de datos: ${err}`));


// Iniciar el servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));


