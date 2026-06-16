import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    gazdra: (state) => { state.value += 1; },
    shemcireba: (state) => { state.value -= 1; }
  }
});

export const { gazdra, shemcireba } = counterSlice.actions;
export default counterSlice.reducer;