import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../pages/main/main.slice'

/*

  должно быть сюда должен будет подключаться store

*/

export const store = configureStore({
  reducer: counterReducer.reducer,
})

export type RootState = ReturnType<typeof store.getState>
 