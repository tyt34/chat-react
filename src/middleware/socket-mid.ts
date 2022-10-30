import { MiddlewareAPI, Dispatch, Action } from "../shared/types/middleware"
import io from 'socket.io-client'
import { socketOptions, urlApi } from "../shared/constants/main"
import { 
  addMessageOtherUser, 
  addUser, 
  removeUser,
} from "../pages/main/main.slice"

export function SocketMid(store: MiddlewareAPI<void>) {
  const socket = io(urlApi)
  
  socket.on(socketOptions.getNewMessage, (messageObj) => {
    console.log(' new mess:add --> ', messageObj )
    store.dispatch(addMessageOtherUser(messageObj))
  })

  socket.on(socketOptions.getNewUser, (user) => {
    console.log(' add --> ', user )
    store.dispatch(addUser(user))
  })

  socket.on(socketOptions.getOldUser, (idUser) => {
    console.log(' rem --> ', idUser )
    store.dispatch(removeUser(idUser))
  })

  return function startNext(next: Dispatch<void>) {
    return function startAction(action: Action) {
      return next(action)
    }
  }
}
