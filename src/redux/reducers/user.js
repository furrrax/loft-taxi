import { createReducer } from '@reduxjs/toolkit';
import {logIn, logOut, authenticate} from '../actions/user';

const initialState = {
    isLoggedIn: false
}

export const userReducer = createReducer(initialState, 
    {
        [logIn.type]: (state) => {
            if (authenticate("valid@email.com", "validpassword"))
                state.isLoggedIn = true
            },
    
        [logOut.type]: (state) => {
            state.isLoggedIn = false
            }
    }
)