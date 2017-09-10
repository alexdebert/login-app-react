import axios from 'axios';

export let submitLogin = ({remember, airline, username, password}) => {
    let config = {
        headers: {'X-API-CALL': 'true'}
    };

    return axios.post('https://beta.id90travel.com/session.json', {
        session: {
            remember_me: remember,
            airline: airline,
            username: username,
            password: password
        }
    }, config);
};