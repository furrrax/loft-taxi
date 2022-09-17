import { takeEvery, call, put } from 'redux-saga/effects';
import { getAddressList, setAddressList, updateCoords, setCoords } from '../actions/map';
import { serverGetAddressList, serverGetCoordinates } from '../api';

export function* getAddressListWatcher() {
    yield takeEvery(getAddressList, loadAddressListSaga);
}

function* loadAddressListSaga(action) {
    const data = action.payload;
    const success = yield call(serverGetAddressList, data);
    if (success) {
        //console.log('address list: ' + success.addresses[0]);
        yield put(setAddressList(success.addresses));
        console.log('server: address received');
    } else {
        console.log('server: address data fail')
    }
}

export function* getCoordsWatcher() {
    yield takeEvery(updateCoords, loadCoordsSaga);
}

function* loadCoordsSaga(action) {
    const data = action.payload;
    const success = yield call(serverGetCoordinates, data);

    if (success) {
        yield put(setCoords(success));
        console.log('server: coords received');
        //console.log(success);
    } else {
        console.log('server: coords data fail')
    }
}

/* export function* mapSagas() {
    yield call(getAddressListWatcher)
    yield call(getCoordsWatcher)
} */