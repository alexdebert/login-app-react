import * as types from './types';
import { createAction } from 'redux-actions';
import * as airlinesApi from '../api/airlines';

export const getAirlines = createAction(types.AIRLINES_LOAD, () => {
    const promise = airlinesApi.getAirlines();
    return { promise };
});