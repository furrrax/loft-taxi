import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./saga/sagas";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { cardReducer } from "./reducers/card";
import { addressReducer } from "./reducers/map";

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    user: userReducer,
    card: cardReducer,
    map: addressReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);