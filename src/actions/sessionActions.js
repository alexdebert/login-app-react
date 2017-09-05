//import * as types from './types';
//import initialState from '../reducers/initialState';
import { push } from 'react-router-redux';

export function loginUser() {
    return function(dispatch) {
        dispatch(push('/search-hotel'));
    };
}
//
//export default (state = initialState.session, action) => {
//    switch(action.type) {
//    case types.LOG_IN_SUCCESS:
//        push('/search-hotel');
//        state = true;
//        return state;
//    default:
//        return state;
//    }
//};