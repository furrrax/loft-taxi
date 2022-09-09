import { createSelector } from '@reduxjs/toolkit'

const selectStore = (store) => store;
export const getIsLoggedIn = createSelector(selectStore , (store) => store.isLoggedIn);

//export const getIsRegistered = createSelector(selectStore , (store) => store.isRegister);