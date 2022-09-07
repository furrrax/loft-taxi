import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {userReducer} from "./reducers/user";

const rootReducer = combineReducers({user: userReducer});
export const store = configureStore({reducer: rootReducer});