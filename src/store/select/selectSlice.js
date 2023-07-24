import { createSlice } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: {
    currentDate: '',
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().toLocaleString('default', { month: 'long' }).slice(0, 3),
    isSelectYear: false,
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    setIsSelectedYear: (state, action) => {
      state.isSelectYear = action.payload === 'year';
    },
  },
});

export const { setSelectedItem, setSelectedYear, setSelectedMonth, setIsSelectedYear } =
  selectSlice.actions;

export default selectSlice.reducer;
