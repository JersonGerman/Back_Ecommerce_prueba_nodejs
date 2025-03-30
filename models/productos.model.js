const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: { type: DataTypes.STRING, allowNull: false },
    precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});


module.exports = { Producto };
// Compare this snippet from models/pedido.model.js: