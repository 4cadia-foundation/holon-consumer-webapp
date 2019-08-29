const Connection = require ('../connection/connection.blockchain');
const Settings = require('../../../config/settings');
const Config = require('../../../config/settings');
const Contract = require('../../../config/abi');
const ethers = require('ethers');


class SmartContractBlockchain {

    constructor () {
        this._wallet = new ethers.Wallet(`${Settings.primaryKey}`, Connection.provider());
    }

    contract () {
        return new ethers.Contract(Contract.address, Contract.abi, Connection.provider());
    }

    contractWithSigner () {
        const contract = this.contract();
        return contract.connect(this._wallet);
    }

}

module.exports = SmartContractBlockchain;
