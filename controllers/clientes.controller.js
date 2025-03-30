const { Cliente } = require('../models/clientes.model');

const { Console } = require('../lib/Console');
const console = new Console('CLIENTES CONTROLLER');

const ClienteService = require('../services/Cliente.service');
const clienteService = ClienteService.getInstance();

const crearClientes = async (req, res) => {
    const { documento, nombre, apellidoPaterno, apellidoMaterno } = req.body;

    // Validar los datos de entrada
    if (!documento || !nombre || !apellidoPaterno || !apellidoMaterno) {
        return res.status(400).json({ 
            message: 'Todos los campos son obligatorios', 
            errors: ['documento', 'nombre', 'apellidoPaterno', 'apellidoMaterno'] 
        });
    }
    // Verificar si el cliente ya existe
    const clienteExistente = await Cliente.findOne({ where: { documento } });
    if (clienteExistente) {
        return res.status(400).json({ message: 'El cliente ya existe' });
    }

    const cliente = await Cliente.create({ documento, nombre, apellidoPaterno, apellidoMaterno });
    res.status(201).json({ message: 'Cliente creado exitosamente', cliente });
};

const obtenerClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
}

const obtenerClientePorId = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
};

const actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { documento, nombre, apellidoPaterno, apellidoMaterno } = req.body;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await cliente.update({ documento, nombre, apellidoPaterno, apellidoMaterno });
    res.json({ message: 'Cliente actualizado exitosamente', cliente });
}

const eliminarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await cliente.destroy();
    res.json({ message: 'Cliente eliminado exitosamente' });
};

module.exports = {
    crearClientes,
    obtenerClientes,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
};