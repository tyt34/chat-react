import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from '../../app/store'

interface Props {
  a: string
}

const initialState: Props = {
  a: ''
}

export const counterReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    replaceA: (state, action: PayloadAction<string>) => {
      state.a = action.payload
    }
  }
})

export const { replaceA } = counterReducer.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch