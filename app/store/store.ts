import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../componentes/counter/CounterSlice';
import galeriaReducer from './slices/galeriaSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        galeria: galeriaReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

