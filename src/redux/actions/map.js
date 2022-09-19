import { createAction } from "@reduxjs/toolkit";


export const getAddressList = createAction('@map/getAddressList');

export const setAddressList = createAction("@map/setAddressList")

export const updateCoords = createAction('@map/updateCoords', (address1, address2) => {
    return {
        payload: { address1, address2 },
    }
});

export const setCoords = createAction("@map/setCoords")