// import { Logger } from '../middleware/logger'
import { configureStore } from '@reduxjs/toolkit'
import { SocketMid } from '../middleware/socket-mid'
import { mainSlice } from './app.slice'

export const store = configureStore({
  reducer: mainSlice.reducer,
  middleware: [/*Logger*/ SocketMid]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
