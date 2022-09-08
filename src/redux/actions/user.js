import { createAction } from "@reduxjs/toolkit";

export const logIn = createAction('@user/logIn');
export const logOut = createAction('@user/logOut');

export const AUTHENTICATE = 'AUTHENTICATE';
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
});