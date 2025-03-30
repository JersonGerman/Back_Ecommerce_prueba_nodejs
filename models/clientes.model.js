const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/database');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    documento: { 
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false 
    },
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    apellidoPaterno: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    apellidoMaterno: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
});

module.exports = {Cliente};
// Compare this snippet from controllers/cliente.controller.js: