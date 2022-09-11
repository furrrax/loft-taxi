import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { authMiddleware, regMiddleware } from "./middlwares/auth";

export const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware).concat(regMiddleware),
});