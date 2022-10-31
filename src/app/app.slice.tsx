import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from './store'
import { IUser, IMessage } from '../shared/types/main'
import { checkInArray } from '../shared/utils/main'
// import { io, Socket } from "socket.io-client";
// import { urlApi } from '../shared/constants/main'
/*
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

const socket = io(urlApi)
*/
interface Props {
  mainUser: IUser
  listUsers: IUser[]
  listMessages: IMessage[]
  // socketApi: Socket
}

const initialState: Props = {
  mainUser: {
    id: '',
    name: '',
    avatar: ''
  },
  listUsers: [],
  listMessages: []
  // socketApi: socket
}

interface MessageAndImg {
  text: string
  imgInBase64: any
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
    addMessageMainUser: (state, action: PayloadAction<MessageAndImg>) => {
      state.listMessages = [...state.listMessages, {
        id: state.mainUser.id,
        avatar: state.mainUser.avatar,
        name: state.mainUser.name,
        message: action.payload.text,
        imageFile: action.payload.imgInBase64
      }]
    },
    addMessageOtherUser: (state, action: PayloadAction<IMessage>) => {
      const { avatar, id, imageFile, message, name } = action.payload
      if (id !== state.mainUser.id) {
        state.listMessages = [...state.listMessages, {
          id,
          avatar,
          name,
          message,
          imageFile
        }]
      }
    }
  }
})

export const {
  setMainUser,
  addUser,
  removeUser,
  addMessageMainUser,
  addMessageOtherUser
} = mainSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch