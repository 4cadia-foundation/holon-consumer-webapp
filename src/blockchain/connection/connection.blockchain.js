import Settings from '../../config/settings';
import * as ethers from 'ethers';

export default class Connection {

    static provider () {
        if (Settings.port === 0)
            return new ethers.providers.JsonRpcProvider(`${Settings.provider}://${Settings.host}`);
        else
            return new ethers.providers.JsonRpcProvider(`${Settings.provider}://${Settings.host}:${Settings.port}`);
    }
}