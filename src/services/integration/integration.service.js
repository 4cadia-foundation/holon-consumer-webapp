import {SmartContractBlockchain} from '../../blockchain/smartcontract/smartcontract.blockchain';

export default class IntegrationService {

    constructor ( ) {
        const smartContract = new SmartContractBlockchain();
        this._contractWithSigner = smartContract.contractWithSigner();
    }


    integrateWithHollon (address) {
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

    authorization ( address ) {
        return this._contractWithSigner.getAllowedField(address, 'email')
            .then( transaction => {
                return transaction;
            });
    }

}
