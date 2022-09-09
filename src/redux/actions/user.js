import { createAction } from "@reduxjs/toolkit";

export const AUTHENTICATE = 'AUTHENTICATE';
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
});

export const REGISTER = 'REGISTER';
export const register = (email, name, surname, password) => ({
    type: REGISTER,
    payload: { email, name, surname, password }
});

export const logIn = createAction('@user/logIn');
export const logOut = createAction('@user/logOut');
//export const regIn = createAction('@user/regIn');