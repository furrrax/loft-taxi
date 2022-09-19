import { takeEvery, call, put } from 'redux-saga/effects';
import { authenticate, logIn, logOut } from "../actions/user";
import { serverLogIn } from '../api';

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(serverLogIn, email, password)
    if(success) {
        yield put(logIn());
    } else {
        yield put(logOut());
    }
}

export function* authSaga() {
    yield takeEvery(authenticate, authenticateSaga)
}