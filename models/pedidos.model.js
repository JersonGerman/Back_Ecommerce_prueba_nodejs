const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'enviado', 'entregado'),
        defaultValue: 'pendiente'
    },
    total: { type: DataTypes.FLOAT, allowNull: false },
    fecha_pedido: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

module.exports = { Pedido };
// Compare this snippet from models/producto.model.js: