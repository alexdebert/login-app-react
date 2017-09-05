import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session from '../actions/sessionActions';
import airline from './airlineReducer';

export default combineReducers({
    routing: routerReducer,
    session,
    airline
});