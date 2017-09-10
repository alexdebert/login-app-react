import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export function* updateAfterAuthSuccess() {
    //const { auth } = yield select()

    //localStorage.setItem('jwtToken', auth.user.token)

    //yield put(setToken(auth.user.token))

    yield put(push('/search-hotel'));
}

export function* watchAuthFulfilled() {
    yield* takeLatest(
        ['AUTH.LOGIN_FULFILLED'],
        updateAfterAuthSuccess
    );
}
