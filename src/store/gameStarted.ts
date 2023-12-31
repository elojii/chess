import { createSlice } from "@reduxjs/toolkit";

type GameStart = {
  gameStarted: boolean;
};

const initialState: GameStart = {
  gameStarted: false,
};

const gameStarted = createSlice({
  name: "gameStarted",
  initialState,
  reducers: {
    setGameStart: (state) => {
      state.gameStarted = !state.gameStarted;
    },
  },
});

export const gameStartedReducer = gameStarted.reducer;
export const { setGameStart } = gameStarted.actions;
