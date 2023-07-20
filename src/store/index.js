import { configureStore } from '@reduxjs/toolkit';

import selectReducer from '@/store/select/selectSlice.js';

export const store = configureStore({
  reducer: {
    select: selectReducer,
  },
});
