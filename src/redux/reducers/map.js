import { createReducer } from '@reduxjs/toolkit';
import { setAddressList, setCoords } from '../actions/map';

const initialState = {
    address1: '',
    address2: '',
    coord1: '',
    coord2: ''
}

export const addressReducer = createReducer(initialState, 
    {
        [setAddressList.type]: (state, action) => {
            state.address1 = action.payload
            state.address2 = action.payload
        },

        [setCoords.type]: (state, action) => {
            state.coord1 = action.payload
            state.coord2 = action.payload
        },
    }
)
