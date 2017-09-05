import * as types from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.airlines, action) {
    switch(action.type) {
    case types.AIRLINES_LOADED:
        return {
            ...state,
            airlines: action.payload.airlines
        };
    }
    return state;
}