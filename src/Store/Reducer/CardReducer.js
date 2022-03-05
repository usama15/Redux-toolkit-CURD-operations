import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardInfo: []
};

const CardReducer = createSlice({
    name: "cards",
    initialState: initialState,
    reducers: {
        saveCard: (state, action) => {
            state.cardInfo.push(action.payload)
        },
        removeCard: (state, action) => {
            state.cardInfo = state.cardInfo.filter((item) => item.id !== action.payload);
        }
    }
})

export default CardReducer.reducer
export const { saveCard, removeCard } = CardReducer.actions
export const selectCardList = state => state.cards.cardInfo