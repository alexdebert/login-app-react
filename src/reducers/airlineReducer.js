//import * as types from '../actions/types';
import { handleActions } from 'redux-actions';

const initialState = {
    airlinesList: []
};

export default handleActions ({
    ['AIRLINES_LOAD_FULFILLED']: (state, action) => ({
        ...state,
        //use lodash get
        //_.get(action, 'payload.data', [])
        airlinesList: action.payload.data
    })
}, initialState);