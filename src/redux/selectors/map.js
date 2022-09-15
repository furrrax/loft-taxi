import { createSelector } from '@reduxjs/toolkit'

const selectStore = (store) => store.map;
export const selectAddressList = createSelector(selectStore , (map) => map.address);
