import { takeEvery, call, put } from 'redux-saga/effects';
import { register, logIn, logOut } from "../actions/user";
import { serverReg } from '../api';

export function* registerSaga(action) {
    const {email, name, surname, password} = action.payload;
    const success = yield call(serverReg, email, name, surname, password)
    if(success) {
        yield put(logIn());
    } else {
        yield put(logOut());
    }
}

export function* regSaga() {
    yield takeEvery(register, registerSaga)
}