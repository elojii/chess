import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { turnReducer } from './turn'
import { gameOutcomeReducer } from "./gameOutcome";
import { gameStartedReducer } from "./gameStarted";

const rootReducer = combineReducers({
    turn: turnReducer,
    gameOutcome: gameOutcomeReducer,
    gameStarted: gameStartedReducer
})

export const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;