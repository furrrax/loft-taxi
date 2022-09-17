import { createSelector } from '@reduxjs/toolkit'

const selectStore = (store) => store.map;

export const selectAddressList = createSelector(selectStore , (map) => map.addressList);
//export const selectAddressList2 = createSelector(selectStore , (map) => map.address2);

export const selectCoord = createSelector(selectStore , (map) => map.coordinates);
