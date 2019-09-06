import Settings from '../../config/settings';
import * as ethers from 'ethers';

export default class Connection {

    static provider () {
        return new ethers.providers.JsonRpcProvider(`${Settings.provider}://${Settings.host}:${Settings.port}`);
    }
}