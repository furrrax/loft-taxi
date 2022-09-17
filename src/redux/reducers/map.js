import { createReducer } from '@reduxjs/toolkit';
import { setAddressList, setCoords } from '../actions/map';

const initialState = {
    addressList: '',
    coordinates: '',
}

export const addressReducer = createReducer(initialState, 
    {
        [setAddressList.type]: (state, action) => {
            state.addressList = action.payload
            console.log('Все адреса из стора: ' + state.addressList)
            //console.log('Первые 2 адреса из стора: ' + state.addressList[0], state.addressList[1])
            //console.log(typeof state.addressList)
        },

        [setCoords.type]: (state, action) => {
            state.coordinates = action.payload
            console.log('Координаты из стора: ' + state.coordinates)
        },
    }
)
