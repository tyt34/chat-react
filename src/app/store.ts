import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from '../pages/main/main.slice'

/*

  должно быть сюда должен будет подключаться store

*/

export const store = configureStore({
  reducer: mainSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>
 