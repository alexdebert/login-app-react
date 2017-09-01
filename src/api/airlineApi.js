import axios from 'axios';

class AirlineApi {  
    static getAllAirlines() {
        return axios.get('https://beta.id90travel.com/airlines')
            .catch(error => {
                return error;
            });
    }
}

export default AirlineApi; 