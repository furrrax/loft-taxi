import { takeEvery, call, put, take } from 'redux-saga/effects';
import { getAddressList, setAddressList } from '../actions/map';
import { serverGetAddressList } from '../api';

export function* getAddressListWatcher() {
    yield takeEvery(getAddressList, loadAddressListSaga);
}

function* loadAddressListSaga(action) {
    const data = action.payload;
    const success = yield call(serverGetAddressList, data);

    if (success) {
        yield put(setAddressList(success.addresses));
        console.log('address received');
        //console.log(success);
    } else {
        console.log('address data fail')
    }
}
