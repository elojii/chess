import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WinnerState = {
    winner: "black" | "white" | undefined
}

const initialState: WinnerState = {
    winner: undefined
}

const gameOutcome = createSlice({
    name: 'gameOutcome',
    initialState,
    reducers: {
        setWinner: (state, action: PayloadAction<"black" | "white">) => {
            state.winner = action.payload
        }
    }
})

export const gameOutcomeReducer = gameOutcome.reducer
export const { setWinner } = gameOutcome.actions