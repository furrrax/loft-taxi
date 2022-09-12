import { createReducer } from '@reduxjs/toolkit';
import {logIn, logOut} from '../actions/user';

const initialState = {
    isLoggedIn: false,
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
        }
    }
)