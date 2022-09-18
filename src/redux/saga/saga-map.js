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
        yield put(setAddressList(success.addresses));
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
    }
}