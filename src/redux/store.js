import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/user";
import { authMiddleware } from "./middlwares/auth";

const rootReducer = combineReducers({user: userReducer});
export const store = configureStore(rootReducer, applyMiddleware(authMiddleware));