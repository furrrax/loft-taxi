import { createReducer } from '@reduxjs/toolkit';
import { setAddressList, setCoords } from '../actions/map';
import { logOut } from '../actions/user';

const initialState = {
    addressList: [],
    coordinates: [],
}

export const addressReducer = createReducer(initialState, 
    {
        [setAddressList.type]: (state, action) => {
            state.addressList = action.payload
        },

        [setCoords.type]: (state, action) => {
            state.coordinates = action.payload
        },

        [logOut.type]: (state) => {
            state.coordinates = []
        },
    }
)
