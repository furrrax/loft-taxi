import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./saga/sagas";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);