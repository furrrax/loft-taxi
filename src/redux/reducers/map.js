import { createReducer } from '@reduxjs/toolkit';
import { setAddressList } from '../actions/map';

const initialState = {
    address: [],
}

export const addressReducer = createReducer(initialState, 
    {
        [setAddressList.type]: (state, action) => {
            state.address = action.payload
        },
    }
)
