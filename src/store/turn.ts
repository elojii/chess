import { createSlice } from '@reduxjs/toolkit';

type Turn = {
  turn: 'white' | 'black'
}

const initialState: Turn = {
  turn: 'white'
}

const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {
    toggleTurn: (state) => {
      state.turn = state.turn === 'white' ? 'black' : 'white';
    },
    setWhiteTurn: (state) => {
      state.turn = 'white'
    }
  },
});

export const { toggleTurn, setWhiteTurn } = turnSlice.actions;
export const turnReducer = turnSlice.reducer;
