import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import airlines from './airlineReducer';

export default combineReducers({
    routing: routerReducer,
    airlines
});