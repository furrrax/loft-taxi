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
        yield put(setCardNumber(success.cardNumber));
        yield put(setCardDate(success.expiryDate));
        if (success.cardName === undefined) {
            yield put(cardStateOff());
        } else {
            yield put(cardStateOn());
        }
    } else {
        yield put(cardStateOff());
    }
}


export function* updateCardData(action) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const success = yield call(serverCardUpdate, cardNumber, expiryDate, cardName, cvc)
    if(success) {
        yield put(getCard());
    }
}

export function* regCardSaga() {
    yield takeEvery(updateCard, updateCardData);
}