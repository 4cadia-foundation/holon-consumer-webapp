const Settings = require('../../../config/settings');
const ethers = require('ethers');

class Connection {

    static provider () {
        return new ethers.providers.JsonRpcProvider(`${Settings.provider}://${Settings.host}:${Settings.port}`);
    }
}

module.exports = Connection;
