import { createReducer } from '@reduxjs/toolkit';
import { logIn, logOut, setErrorAuth, setErrorReg } from '../actions/user';

const initialState = {
    isLoggedIn: false,
    errorAuth: '',
    errorReg: '',
}

export const userReducer = createReducer(initialState, 
    {
        [logIn.type]: (state) => {
            state.isLoggedIn = true
            localStorage.setItem('lt-authorized', true)
        },
    
        [logOut.type]: (state) => {
            state.isLoggedIn = false
            localStorage.setItem('lt-authorized', false)
        },

        [setErrorAuth.type]: (state, action) => {
            state.errorAuth = action.payload
        },

        [setErrorReg.type]: (state, action) => {
            state.errorReg = action.payload
        },
    }
)