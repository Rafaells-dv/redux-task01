import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../componentes/counter/CounterSlice';
import galeriaReducer from './slices/galeriaSlice';
import taskReducer from './slices/taskSlice';
import cardReducer from './slices/cardSlice';
import { pokemonApi } from "../services/pokemon";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        galeria: galeriaReducer,
        tasks: taskReducer,
        cards: cardReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

