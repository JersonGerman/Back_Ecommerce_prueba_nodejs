const { Sequelize } = require('sequelize');
const {} = require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    port: process.env.DB_PORT,
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
    },
    logging: true,
});


module.exports=  {sequelize};


// const sequelize = new Sequelize('DB_QueTal_Compra', 'sa', 'Admin1234', {
//     host: 'localhost',
//     dialect: 'mssql',
//     port: 14333,
// });
