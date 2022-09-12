import { takeEvery, call, put } from 'redux-saga/effects';
import { authenticate, logIn, logOut } from "../actions/user";
import { serverLogIn } from '../api';

//const setStorageAuthTrue = () => {localStorage.setItem('lt-authorized', true)}
//const setStorageAuthFalse = () => {localStorage.setItem('lt-authorized', false)}

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(serverLogIn, email, password)
    if(success) {
        //setStorageAuthTrue();
        yield put(logIn());
    } else {
        //setStorageAuthFalse();
        yield put(logOut());
    }
}

export function* authSaga() {
    yield takeEvery(authenticate, authenticateSaga)
}