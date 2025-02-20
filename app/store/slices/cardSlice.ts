import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

enum Categoria {
    Backlog = "Backlog",
    Desenvolvendo = "Desenvolvendo",
    Concluido = "Concluido"
}

interface Card {
    id: number;
    title: string;
    description: string;
    categoria: Categoria;
}

interface CardState {
    cards: Card[];
}

const initialState: CardState = {
    cards: []
}

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        },
        editCard: (state, action: PayloadAction<{ id: number; newTitle: string; newDesc: string }>) => {
            state.cards = state.cards.map((card) =>
                card.id === action.payload.id ? { ...card, title: action.payload.newTitle, description: action.payload.newDesc } : card
            );
        },
        removeCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter(card => card.id !== action.payload);
        },
        moveCard: (state, action: PayloadAction<{id: number, newCategoria: Categoria}>) => {
            const card = state.cards.find(card => card.id === action.payload.id);
            if(card) {
                card.categoria = action.payload.newCategoria;
            }
        }
    }
})

export const {addCard, editCard, removeCard, moveCard} = cardSlice.actions;
export default cardSlice.reducer;