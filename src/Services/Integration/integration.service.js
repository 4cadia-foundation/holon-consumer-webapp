import axios from 'axios';

class IntegrationService {

    integrateWithHollon (address) {
        return axios.post('http://localhost:8080/api/integrate', {address: address})
            .then( ( response ) => {
               return response.data;
            });
    }

}
export default IntegrationService;
