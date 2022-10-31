import { configureStore } from '@reduxjs/toolkit'
import { mainSlice } from './app.slice'
import { Logger } from '../middleware/logger'
import { SocketMid } from '../middleware/socket-mid'

export const store = configureStore({
  reducer: mainSlice.reducer,
  //middleware: [Logger, SocketMid]
  middleware: [SocketMid]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch