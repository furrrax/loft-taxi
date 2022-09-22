import { takeEvery, call, put } from 'redux-saga/effects';
import { authenticate, logIn, logOut, setErrorAuth } from "../actions/user";
import { serverLogIn } from '../api';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const data = yield call(serverLogIn, email, password)
    if(data.success) {
        yield put(logIn());
    } else {
        yield put(setErrorAuth(data.error));
        yield delay(5000)
        yield put(setErrorAuth(''));
        
        yield put(logOut());
    }
}

export function* authSaga() {
    yield takeEvery(authenticate, authenticateSaga)
}