import { IUser } from '../types/main'

export const checkInArray = (id: string, array: IUser[]) => {
  let check = true
  array.map((u: IUser) => {
    if (u.id === id) {
      check = false
    }
  })
  return check
}
