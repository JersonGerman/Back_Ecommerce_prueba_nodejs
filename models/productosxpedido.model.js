const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');
const { Pedido } = require('./pedidos.model');
const { Producto } = require('./productos.model');

const ProductosxPedido = sequelize.define('ProductosxPedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    PedidoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'id'
        },
        allowNull: false
    },
    ProductoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id'
        },
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false,
});


module.exports = {ProductosxPedido};
// Compare this snippet from models/pedido.model.js: