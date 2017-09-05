//import airlineApi from '../api/airlineApi';
//
//export function loadAirlines() {
//    return function(dispatch) {
//        return airlineApi.getAllAirlines().then(airlines => {
//            dispatch(loadAirlinesSuccess(airlines));
//        }).catch(error => {
//            throw(error);
//        });
//    };
//}

import axios from 'axios';
import * as types from './types';

export function getAirlines() {
    return function(dispatch) {
        axios.get('https://beta.id90travel.com/airlines')
            .then(response => {
                dispatch({
                    type: types.AIRLINES_LOADED,
                    payload: response.data
                });
            })
            .catch((error) => {
                throw(error);
            });
    };
}