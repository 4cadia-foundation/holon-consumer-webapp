const Config = require('../../config/abi');
const Settings = require('../../config/settings');
const ethers = require('ethers');


class IntegrationService {

    constructor () {

        const provider = new ethers.providers.JsonRpcProvider(`${Settings.provider}://${Settings.host}:${Settings.port}`);
        const contract = new ethers.Contract(Config.address, Config.abi, provider);
        const wallet = new ethers.Wallet(`${Settings.primaryKey}`, provider);
        this._contractWithSigner = contract.connect(wallet);

    }

    async transaction (address) {
        return this._contractWithSigner.askDecryptedData(address, 'email')
            .then(transaction => {
                return transaction.wait();
            })
            .then(data => {
                const { transactionHash, blockNumber } = data;
                return {
                    transactionHash,
                    blockNumber
                };
            });
    }

}

module.exports = IntegrationService;
