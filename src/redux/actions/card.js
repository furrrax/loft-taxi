import { createAction } from "@reduxjs/toolkit";

export const updateCard = createAction('@card/updateCard', (cardNumber, expiryDate, cardName, cvc) => {
    return {
        payload: { cardNumber, expiryDate, cardName, cvc },
    }
});

export const getCard = createAction('@card/getCard');

export const cardStateOn = createAction('@card/cardStateOn');
export const cardStateOff = createAction('@card/cardStateOff');

export const setCardNumber = createAction("@card/cardNumber", (cardNumber) => {
    return { payload: {cardNumber} }
});
export const setCardDate = createAction("@card/cardDate", (cardDate) => {
    return { payload: {cardDate} }
});