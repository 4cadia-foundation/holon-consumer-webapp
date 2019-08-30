const ethers = require('ethers');
const Config = require('../../config/abi');

const IntegrationService = require('../service/integration.service');


class SocketServer {

    constructor (socket){
        this.socket = socket;
        this._service = new IntegrationService();

    }

    async getApiAndEmit (socket, address) {
        try {
           const fieldIsAllowed = await this._service.fieldIsAllowed(address, 'email');
           socket.emit("FromAPI", fieldIsAllowed);
        }catch (error) {
            console.error(`Error: ${error.code}`);
        }
    }

    connector () {

        let interval;
        this.socket.on("connection", ( socket ) => {
           const address = socket.handshake.query.address;
            if (interval)
                clearInterval(interval);

            interval = setInterval(() => this.getApiAndEmit(socket, address) , 5000);

            socket.on("disconnect", () => {
                console.log("Client disconnected");
            });

        });
    }

}


module.exports = SocketServer;
