import axios from 'axios';

class IntegrationService {

    static integrateWithHollon (address) {
        return axios.post('http://localhost:8080/api/integrate', {address: address})
            .then( ( response ) => {
               return response.data;
            });
    }

    static authorization ( address ) {
        return axios.get(`http://localhost:8080/api/integrate/${address}`)
            .then( ( response ) => {
                return response.data;
            });
    }

}
export default IntegrationService;
