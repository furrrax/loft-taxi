import { createReducer } from '@reduxjs/toolkit';
import { setAddressList, setCoords } from '../actions/map';

const initialState = {
    addressList: [],
    coordinates: [],
}

export const addressReducer = createReducer(initialState, 
    {
        [setAddressList.type]: (state, action) => {
            state.addressList = action.payload
            console.log('Стор. Полученные адресы: ' + state.addressList)
            console.log('Стор. Адреса. Тип данных: ' + typeof state.addressList)
        },

        [setCoords.type]: (state, action) => {
            state.coordinates = action.payload
            console.log('Стор. Полученные координаты: ' + state.coordinates)
        },
    }
)
