import { createReducer } from '@reduxjs/toolkit';
import { setCardNumber, setCardDate } from '../actions/card';

const initialState = {
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
    }
)