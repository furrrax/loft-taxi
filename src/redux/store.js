import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";

import {uiReducer} from "./ui/reducer";

const rootReducers = combineReducers({
    ui: uiReducer,
});

export const store = configureStore({ reducer: rootReducers });