export interface IUser {
  id: string
  avatar: string
  name: string
}

export interface IMessage extends IUser {
  imageFile: string,
  message: string
}