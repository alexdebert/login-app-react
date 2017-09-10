//import * as types from '../actions/types';
import { handleActions } from 'redux-actions';

//const initialState = {
//    airlinesList: []
//};

export default handleActions ({
    ['AUTH.LOGIN_FULFILLED']: (state, action) => {
        push('/search-hotel')
        return state;
    }
}, initialState);