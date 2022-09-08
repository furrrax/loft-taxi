import { createReducer } from '@reduxjs/toolkit';
import {logIn, logOut} from '../actions/user';

const initialState = {
    isLoggedIn: false
}

export const userReducer = createReducer(initialState, 
    {
        [logIn.type]: (state) => {
            console.log('submit clicked')
            state.isLoggedIn = true
        },
    
        [logOut.type]: (state) => {
            state.isLoggedIn = false
        }
    }
)