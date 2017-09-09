import axios from 'axios';

export let getAirlines = () => {
    return axios.get('https://beta.id90travel.com/airlines');
};