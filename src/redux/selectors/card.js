import { createSelector } from '@reduxjs/toolkit'

const selectStore = (store) => store.card;
export const selectCardNumber = createSelector(selectStore , (card) => card.userCard.cardNumber);
export const selectCardDate = createSelector(selectStore , (card) => card.userCard.cardDate);