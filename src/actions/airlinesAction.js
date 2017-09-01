import * as constants from './constantsAction';
import AirlineApi from '../api/airlineApi';

export function loadAirlinesSuccess(airlines) {  
    return {type: constants.LOAD_AIRLINES_SUCCESS, airlines};
}

export function loadAirlines() {  
    return function(dispatch) {
        return AirlineApi.getAllAirlines().then(airlines => {
            dispatch(loadAirlinesSuccess(airlines));
        }).catch(error => {
            throw(error);
        });
    };
}