import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from '../pages/main/main.slice'
import { Logger } from '../middleware/logger';

export const store = configureStore({
  reducer: mainSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(Logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch