import { createSelector } from '@reduxjs/toolkit'

const selectStore = (store) => store.map;
export const selectAddressList1 = createSelector(selectStore , (map) => map.address1);
export const selectAddressList2 = createSelector(selectStore , (map) => map.address2);
