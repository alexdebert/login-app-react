import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import airlines from './airlinesReducer';

export default combineReducers({
    auth,
    airlines,
    routing: routerReducer
});