import { createSelector } from '@reduxjs/toolkit'

const selectStore = (store) => store.user;
export const getIsLoggedIn = createSelector(selectStore , (user) => user.isLoggedIn);