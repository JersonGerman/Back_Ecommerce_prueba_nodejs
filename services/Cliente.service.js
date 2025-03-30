class ClienteService{
    static _clienteServiceInstance = null;

    constructor(){}

    static getInstance(){
        if(!ClienteService._clienteServiceInstance){
            ClienteService._clienteServiceInstance = new ClienteService();
        }
        return ClienteService._clienteServiceInstance;
    }

    async createCliente(clienteData) {
        const clienteModel = ClienteModel.getInstance();
        const cliente = await clienteModel.createCliente(clienteData);
        return cliente;
    }

    async getClientes() {
        const clienteModel = ClienteModel.getInstance();
        const clientes = await clienteModel.getClientes();
        return clientes;
    }



}

module.exports = ClienteService;