import { createAction } from "@reduxjs/toolkit";

export const authenticate = createAction('@user/authenticate', (email, password) => {
    return {
        payload: { email, password },
    }
});

export const register = createAction('@user/register', (email, name, surname, password) => {
    return {
        payload: { email, name, surname, password },
    }
});

export const logIn = createAction('@user/logIn');
export const logOut = createAction('@user/logOut');