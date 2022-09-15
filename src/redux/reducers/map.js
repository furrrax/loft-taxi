import { createReducer } from '@reduxjs/toolkit';
import { setAddressList } from '../actions/map';

const initialState = {
    address1: [],
    address2: [],
}

export const addressReducer = createReducer(initialState, 
    {
        [setAddressList.type]: (state, action) => {
            state.address1 = action.payload
            state.address2 = action.payload
        },
    }
)
