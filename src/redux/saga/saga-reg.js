import { takeEvery, call, put } from 'redux-saga/effects';
import { registrate, logIn, logOut, setErrorReg } from "../actions/user";
import { serverReg } from '../api';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* registerSaga(action) {
    const {email, name, surname, password} = action.payload;
    const data = yield call(serverReg, email, name, surname, password)
    if(data.success) {
        yield put(logIn());
    } else {
        console.log(data.error)
        yield put(setErrorReg(data.error));
        yield delay(5000)
        yield put(setErrorReg(''));

        yield put(logOut());
    }
}

export function* regSaga() {
    yield takeEvery(registrate, registerSaga)
}