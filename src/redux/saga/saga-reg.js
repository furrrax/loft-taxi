import { takeEvery, call, put } from 'redux-saga/effects';
import { register, logIn, logOut } from "../actions/user";
import { serverReg } from '../api';

//const setStorageAuthTrue = () => {localStorage.setItem('lt-authorized', true)}
//const setStorageAuthFalse = () => {localStorage.setItem('lt-authorized', false)}

export function* registerSaga(action) {
    const {email, name, surname, password} = action.payload;
    const success = yield call(serverReg, email, name, surname, password)
    if(success) {
        //setStorageAuthTrue();
        yield put(logIn());
    } else {
        //setStorageAuthFalse();
        yield put(logOut());
    }
}

export function* regSaga() {
    yield takeEvery(register, registerSaga)
}