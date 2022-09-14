import { takeEvery, call, put } from 'redux-saga/effects';
import { updateCard, getCard, setCardNumber, setCardDate, cardStateOn, cardStateOff } from '../actions/card';
import { serverCardUpdate, serverCardGetData } from '../api';

export function* getCardWatcher() {
    yield takeEvery(getCard, loadCardSaga);
}

function* loadCardSaga(action) {
    const data = action.payload;
    const success = yield call(serverCardGetData, data);

    if (success) {
        //console.log('data received')
        console.log(success, success.cardName);
        yield put(setCardNumber(success.cardNumber));
        yield put(setCardDate(success.expiryDate));
        if (success.cardName === undefined) {
            yield put(cardStateOff());
            console.log('card data undefined')
        } else {
            console.log('card data OK')
            yield put(cardStateOn());
        }
    } else {
        console.log('get data fail')
        yield put(cardStateOff());
    }
}


export function* updateCardData(action) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const success = yield call(serverCardUpdate, cardNumber, expiryDate, cardName, cvc)
    if(success) {
        //setStorageAuthTrue();
        yield put(getCard());
        console.log('card data updated');
    } else {
        //setStorageAuthFalse();
        console.log('card data false');
    }
}

export function* regCardSaga() {
    yield takeEvery(updateCard, updateCardData);
}