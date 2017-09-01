import { combineReducers } from 'redux';
import airlines from './airlineReducer';

const routers =  combineReducers({
    airlines
});

export default routers;