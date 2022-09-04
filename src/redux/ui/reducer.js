import { createReducer } from "@reduxjs/toolkit";
import { setPage } from "./actions";

const initialStore = {
    page: 'pageLogin'
};

export const uiReducer = createReducer(initialStore, {
    [setPage.type]: (store, action) => {
        store.page = action.payload;
    },
});