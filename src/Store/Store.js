import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./Reducer/CardReducer";

export const store = configureStore({
    reducer:{
        cards: CardReducer
    }
})