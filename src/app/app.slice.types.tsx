import { IMessage, IUser } from '../shared/types/main'

export type SliceType = {
  mainUser: IUser
  listUsers: IUser[]
  listMessages: IMessage[]
  socketId: string
}

export type MessageAndImg = {
  text: string
  imgInBase64: string
}
