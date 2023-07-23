import { createSlice } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: {
    isSelectYear: false,
  },
  reducers: {
    setSelectedYear: (state, action) => {
      state.isSelectYear = action.payload === 'year';
    },
  },
});

export const { setSelectedYear } = selectSlice.actions;

export default selectSlice.reducer;
