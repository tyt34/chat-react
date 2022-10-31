import { MiddlewareAPI, Dispatch, Action } from "../shared/types/middleware"
import io from 'socket.io-client'
import { socketOptions, urlApi } from "../shared/constants/main"
import { 
  addMessageOtherUser, 
  addUser, 
  removeUser,
} from "../app/app.slice"

export function SocketMid(store: MiddlewareAPI<void>) {
  const socket = io(urlApi)
  
  socket.on(socketOptions.getNewMessage, (messageObj) => {
    store.dispatch(addMessageOtherUser(messageObj))
  })

  socket.on(socketOptions.getNewUser, (user) => {
    store.dispatch(addUser(user))
  })

  socket.on(socketOptions.getOldUser, (idUser) => {
    store.dispatch(removeUser(idUser))
  })

  return function startNext(next: Dispatch<void>) {
    return function startAction(action: Action) {
      return next(action)
    }
  }
}
