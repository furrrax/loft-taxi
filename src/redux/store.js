import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from "./sagas";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { authMiddleware, regMiddleware } from "./middlwares/auth";

export const rootReducer = combineReducers({
    user: userReducer,
});

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authMiddleware)
    .concat(regMiddleware)
    .concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);