import { createSelector } from '@reduxjs/toolkit'

const selectStore = (store) => store.user;

export const getIsLoggedIn = createSelector(selectStore , (user) => user.isLoggedIn);

export const getErrorAuth = createSelector(selectStore , (user) => user.errorAuth.error);

export const getErrorReg = createSelector(selectStore , (user) => user.errorReg.error);