import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { authenticate, register, logIn } from "../actions/user";
import { serverLogIn, serverReg } from '../api';

const setStorageAuthTrue = () => {localStorage.setItem('lt-authorized', true)}
const setStorageAuthFalse = () => {localStorage.setItem('lt-authorized', false)}

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(serverLogIn, email, password)
    if(success) {
        setStorageAuthTrue();
        yield put(logIn());
    } else {
        setStorageAuthFalse();
    }
}

export function* registerSaga(action) {
    const {email, name, surname, password} = action.payload;
    const success = yield call(serverReg, email, name, surname, password)
    if(success) {
        setStorageAuthTrue();
        yield put(logIn());
    } else {
        setStorageAuthFalse();
    }
}

export function* authSaga() {
    yield takeEvery(authenticate, authenticateSaga)
}

export function* regSaga() {
    yield takeEvery(register, registerSaga)
}

export function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(regSaga),
    ]);
}