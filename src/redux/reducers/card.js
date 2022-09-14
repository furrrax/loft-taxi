import { createReducer } from '@reduxjs/toolkit';
import { setCardNumber, setCardDate, cardStateOn, cardStateOff } from '../actions/card';

const initialState = {
    cardDataReceived: false,
    userCard: {
        cardNumber: '',
        cardDate: ''
    }
}

export const cardReducer = createReducer(initialState, 
    {
        [setCardNumber.type]: (state, action) => {
            state.userCard.cardNumber = action.payload
        },

        [setCardDate.type]: (state, action) => {
            state.userCard.cardDate = action.payload
        },

        [cardStateOn.type]: (state) => {
            state.cardDataReceived = true
        },

        [cardStateOff.type]: (state) => {
            state.cardDataReceived = false
        },
    }
)
