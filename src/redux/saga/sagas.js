import { all, fork } from 'redux-saga/effects';

import { authSaga } from './saga-auth';
import { regSaga } from './saga-reg';
import { regCardSaga } from './saga-card';
import { getCardWatcher } from './saga-card';

export function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(regSaga),
        fork(regCardSaga),
        fork(getCardWatcher)
    ]);
}