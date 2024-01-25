import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser, IMessage } from '../shared/types/main'
import { SliceType } from './app.slice.types'
import { checkInArray } from '../shared/utils/main'
import { createSlice } from '@reduxjs/toolkit'
import { store } from './store'

export const initialState: SliceType = {
  mainUser: {
    id: '',
    name: '',
    avatar: '',
  },
  listUsers: [],
  listMessages: [],
  socketId: '',
}

export const mainSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMainUser: (state, action: PayloadAction<IUser>) => {
      state.mainUser.id = action.payload.id
      state.mainUser.name = action.payload.name
      state.mainUser.avatar = action.payload.avatar
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
    addMessage: (state, action: PayloadAction<IMessage>) => {
      const { payload } = action
      const { imageFile, message, avatar, id, name } = payload

      const validText = message !== undefined
      const validImg = imageFile !== undefined

      if (validText && validImg) {
        state.listMessages = [
          ...state.listMessages,
          {
            id: id,
            avatar: avatar,
            name: name,
            message: message,
            imageFile: imageFile,
          },
        ]
      }
    },
    addSocketId: (state, action: PayloadAction<string>) => {
      state.socketId = action.payload
    },
  },
})

export const {
  addMessage,
  // addMessageMainUser,
  // addMessageOtherUser,
  addSocketId,
  addUser,
  removeUser,
  setMainUser,
} = mainSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
