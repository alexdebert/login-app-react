import axios from 'axios';

export let submitLogin = ({remember, airline, username, password}) => {
    debugger;
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

//tenes q agregar la siguiente cabecera
//X-API-CALL:true
//
//parametros de ejemplo:
//    session[airline]=HAWAIIAN AIRLINES (HA)&session[username]=hauser&session[password]=1234&session[remember_me]=1