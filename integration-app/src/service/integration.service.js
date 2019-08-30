const SmartContract = require('../blockchain/smartcontract/smartcontract.blockchain');

class IntegrationService {

    constructor () {
        const smartContract = new SmartContract();
        this._contractWithSigner = smartContract.contractWithSigner();
    }

    transaction (address) {
        return this._contractWithSigner.askDecryptedData(address, 'email')
            .then( transaction => {
                return transaction.wait();
            })
            .then( data => {
                const { transactionHash, blockNumber } = data;
                return {
                    transactionHash,
                    blockNumber
                };
            });
    }

    fieldIsAllowed (address, field) {
        return this._contractWithSigner.getAllowedField(address, field)
            .then( transaction => {
                return transaction;
            });
    }

}

module.exports = IntegrationService;
