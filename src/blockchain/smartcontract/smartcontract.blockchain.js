import Connection from '../connection/connection.blockchain';
import * as Settings from '../../config/settings';
import * as Contract from '../../config/abi';
import * as ethers from 'ethers';

export class SmartContractBlockchain {

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
