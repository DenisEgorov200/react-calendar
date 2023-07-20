import { createSlice } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: {
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().toLocaleString('default', { month: 'long' }).slice(0, 3),
  },
  reducers: {
    setSelectByYear: (state, action) => {
      state.currentYear = action.payload;
    },
    setSelectByMonth: (state, action) => {
      state.currentMonth = action.payload;
    },
  },
});

export const { setSelectByYear, setSelectByMonth } = selectSlice.actions;

export default selectSlice.reducer;
