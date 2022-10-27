import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from '../../app/store'
import { IUser, IMessage } from '../../shared/types/main'
import { checkInArray } from '../../shared/utils/main'

interface Props {
  a: string,
  mainUser: IUser,
  listUsers: IUser[],
  listMessages: IMessage[]
}

const initialState: Props = {
  a: '',
  mainUser: {
    id: '',
    name: '',
    avatar: ''
  },
  listUsers: [],
  listMessages: []
}

export const mainSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    replaceA: (state, action: PayloadAction<string>) => {
      state.a = action.payload
    },
    setMainUser: (state, action: PayloadAction<IUser>) => {
      state.mainUser = Object.assign(action.payload, {})
    },
    addUser: (state, action: PayloadAction<IUser>) => {
      if (checkInArray(action.payload.id, state.listUsers)) {
        state.listUsers = [...state.listUsers, action.payload]
      }
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.listUsers = state.listUsers.filter((user: IUser) => {
        return user.id !== action.payload
      })
    },
    addMessageMainUser: (state, action: PayloadAction<string>) => {
      state.listMessages = [...state.listMessages, {
        id: state.mainUser.id,
        avatar: state.mainUser.avatar,
        name: state.mainUser.name,
        message: action.payload,
        imageFile: ''
      }]
    }
  }
})

export const { 
  replaceA, 
  setMainUser, 
  addUser, 
  removeUser, 
  addMessageMainUser 
} = mainSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch