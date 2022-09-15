import { createAction } from "@reduxjs/toolkit";


export const getAddressList = createAction('@map/getAddressList');

export const setAddressList = createAction("@map/setAddressList", (addresses) => {
    return { payload: addresses }
});