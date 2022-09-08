import { createAction } from "@reduxjs/toolkit";

export const AUTHENTICATE = 'AUTHENTICATE';
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
});

export const logIn = createAction('@user/logIn');
export const logOut = createAction('@user/logOut');