import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { authMiddleware } from "./middlwares/auth";

const rootReducer = combineReducers({user: userReducer});
const middleware = applyMiddleware(authMiddleware);
//export const store = configureStore({reducer: rootReducer});
export const store = configureStore({reducer: rootReducer}, middleware);
