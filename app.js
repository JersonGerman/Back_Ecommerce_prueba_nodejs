const express = require('express');

// importar las rutas
const routes = require('./routes/Routes');

process.on('unhandledRejection', err => {
    console.log('Error server: ', err);
    console.log('Error server: ', err);
});
process.on('uncaughtException', err => {
    console.log(('Error server: ', err));
});
  

const app = express();
// convertir el body a json
app.use(express.json());
// usar routes
routes(app);


app.use((req, res) => {
    // Middleware para manejar rutas no encontradas
    // Puedes personalizar la respuesta según tus necesidades
    try {
        console.log('Ruta no encontrada:', req.baseUrl);
        res.status(404).json({ message: 'Ruta no encontrada' });
    } catch (error) {
        console.log('Error en la ruta:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
        
    }
   
});



module.exports = {app};
