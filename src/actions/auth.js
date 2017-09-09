import { createAction } from 'redux-actions';
import * as authApi from '../api/auth';


export const submitLogin = createAction('AUTH.LOGIN', (user) => {
    const promise = authApi.submitLogin(user);

    return { promise };
});