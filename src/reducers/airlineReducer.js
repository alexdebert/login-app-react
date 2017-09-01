import * as constants from '../actions/constantsAction';
import initialState from './initialState';

export default function airlineReducer(state = initialState.airlines, action) {  
    switch(action.type) {
    case constants.LOAD_AIRLINES_SUCCESS:
        return action.airlines;
    default: 
        return state;
    }
}