import { fork } from 'redux-saga/effects';
import { watchAuthFulfilled } from './auth';

export default function* indexSaga() {
    yield fork(watchAuthFulfilled);
}